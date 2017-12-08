#!/usr/local/bin/python

import os
from urlparse import urlparse
from flask import Flask, render_template, render_template_string, Markup, request, json, redirect, url_for, jsonify, make_response
from flask_flatpages import FlatPages, pygmented_markdown
import datetime
import html2text
import markdown2

import imghdr

## TODO ##
# add proper path handling with combinining paths and things.
# add source control (git repo) upon every save

DEBUG = True
FLATPAGES_AUTO_RELOAD = DEBUG
FLATPAGES_EXTENSION = '.html'

# right now, since we have shitty path handling, include the
# ending slash.
FLATPAGES_ROOT = "../LabNotebooksRepository/"

app = Flask(__name__)
app.config.from_object(__name__)
pages = FlatPages(app)

h = html2text.HTML2Text()
#h.ignore_links = True
#h.ignore_images = True
h.body_width = False

#md = markdown2.Markdown()


# This is a thin wrapper that pretty much does zero rendering
# on the input text, which we've decided is html.
def prerender_jinja(text):
    #print "HI"
    #print text
    prerendered_body = render_template_string(Markup(text))
#    print prerendered_body
    return pygmented_markdown(prerendered_body)

# This route will troll the flat pages directory
# and list what's available to look at.
@app.route('/')
def index():
    sortedpages = reversed(sorted(pages, key=lambda page: page.path))
    return render_template('index.html', pages=sortedpages)
    # TODO, add a rename link

# this route removes a page. don't use lightly, or you'll probably be sad.
# TODO - add version control!
@app.route('/_del/<path:path>')
def delete(path):

    os.remove( FLATPAGES_ROOT + path + ".html")
    return redirect("/")

# this route figures out what the proper name and title of this week's
# lab notebook is supposed to be, and routes you there.
@app.route('/_thisweek')
def thisweek():

    now = datetime.datetime.now()
    delta = datetime.timedelta(days=now.weekday())
    thisweekdatetime = now - delta

    thisweekname = thisweekdatetime.strftime("%y.%j._ - Notes - Week of %B %d %Y")

    return redirect("/"+thisweekname)

# this route will display a static page in the pages directory
# generally, this means a journal file
# if you pass it a file that doesn't exist, it will start up
# a new file, but you ahve to save it
@app.route('/<path:path>')
def page(path):

    newpath = path.replace(" ", "_");

    #print path
    #print newpath

    if newpath != path:
        return redirect(newpath)

    page = pages.get(path)

    if page == None:
        now = datetime.datetime.now()
        delta = datetime.timedelta(days=now.weekday())
        thisweekdatetime = now - delta

        weekstring = thisweekdatetime.strftime("%B %d, %Y")
        currdatestring = now.strftime("%A, %b %d, %Y")
        currtimestring = now.strftime("%I:%M%p")
        return render_template('newjournal.html', week=weekstring, date=currdatestring, time=currtimestring, title=path)



    ### IN ORDER TO FIX AN ISSUE WITH FLASK FLATPAGES WHERE IT ASSUMES
    ### THAT ALL FILES HAVE YAML AND WILL EAT ITSELF IF THEY DON'T
    ### Essentially, the only way to detect it pre-render is that it
    ### chokes when you try to *ACCESS* page.meta. Fucking shit for brains.
    ### So, since page.meta is a dict, if it throws an exception, I'm going
    ### to supply it with a blank dict.
    ### Then, this dict, which render_template assumes will always be there,
    ### is helpfully supplied, thus breaking the cycle of code fucking itself
    ### and me pulling my hair out.
    try:
        print dir(page.meta)
    except:
        page.meta = {}


#    try:
#        print "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
#        print dir(page)
#        print "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
#        print page.html
#        print "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
#        print dir(page.meta)
#        print "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
#        print page.meta
#        print "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
#
#    except:
#        print "WTF STOPPED HERE"

    try:
        return render_template('existingjournal.html', page=page, title=path)
    except ValueError:
        return render_template('error.html', page=page, title=path)


    return render_template('error.html', page=page, title=path)

# this route will display a static page in the pages directory
# generally, this means a journal file
# if you pass it a file that doesn't exist, it will start up
# a new file, but you ahve to save it
@app.route('/_beta/<path:path>')
def page_beta(path):

    newpath = path.replace(" ", "_");

    if newpath != path:
        return redirect(newpath)

    page = pages.get(path)

    if page == None:
        now = datetime.datetime.now()
        delta = datetime.timedelta(days=now.weekday())
        thisweekdatetime = now - delta

        weekstring = thisweekdatetime.strftime("%B %d, %Y")
        currdatestring = now.strftime("%A, %b %d, %Y")
        currtimestring = now.strftime("%I:%M%p")
        return render_template('newjournal_beta.html', week=weekstring, date=currdatestring, time=currtimestring, title=path)

    try:
        print dir(page.meta)
    except:
        page.meta = {}


    try:
        return render_template('existingjournal_beta.html', page=page, title=path)
    except ValueError:
        return render_template('error.html', page=page, title=path)


    return render_template('error.html', page=page, title=path)


# Route that will process the AJAX request (_save)
# saves to the filename from the referrer.
@app.route('/_save', methods=["GET","POST"])
def save():

    print dir(request.args.values)

    #data = request.args.get('data', 0, type=str)
    data = request.form['data']

    #for some reason, sometimes a unicode zero width space (\u200) sneaks in
    data = data.replace(u'\u200b','')

    print "Saving..."
    print "--------------------------------------------------------------------------------"
    print data[:100] + "..."
    #print "    ..."
    print "..." + data[-100:]
    print "--------------------------------------------------------------------------------"

    referrer = request.referrer

    completefile = render_template("existingjournal.html", page=data)

    filename = urlparse(referrer).path.translate(None, '/') + ".html"

    #print "HELLO"
    #print data
    #print "FUC"

    #mdfilename = urlparse(referrer).path.translate(None, '/') + ".md"
    #htmlmdfilename = mdfilename + ".html"

    ### IN ORDER TO FIX AN ISSUE WITH FLASK FLATPAGES WHERE IT ASSUMES
    ### THAT ALL FILES HAVE YAML AND IT WILL EAT IT IF IT ISN'T
    ### I'm pre-pending a blank line here
    ### This blank line will ALWAYS get eaten by flask-flatpages
    ### It won't accumulate because the display dosen't re-fetch saved
    ### data when it saves. It just shoves over what it has
    ### This \n will be stripped off if you do a reload, and we begin
    ### the merry-go-round again.


    data = '\n' + data

    f = open( FLATPAGES_ROOT + filename, 'w')
    f.write(data)
    f.close()

    #f = open( FLATPAGES_ROOT + mdfilename, 'w')
    #f.write( h.handle(data) )
    #f.close()

    #f = open( FLATPAGES_ROOT + htmlmdfilename, 'w')
    #f.write(  md.convert(h.handle(data)) )
    #f.close()



    return jsonify(result=referrer)

# this route will serve a static image from a subdirectory
# in the pages directory (no static images may be served
# from directly in the pages directory).
@app.route('/<path:path>/<path:imgpath>')
def page_bleh(path,imgpath):

    fullpath = (FLATPAGES_ROOT + path + "/" + imgpath)
    resp = make_response(open(fullpath).read())
    if imghdr.what(fullpath) != None:
        resp.content_type = "image/jpeg"
    return resp

# This route will process the AJAX request from the imagebrowser plugin,
# and troll the FLATPAGES_ROOT subdirectories for images,
# and return what's available to look at in JSON format
@app.route('/_browse_images')
def browse_images():

    # nothing in there
    if not os.path.exists(FLATPAGES_ROOT):
        return "[]"

    started = 0
    jsons = []
    for (dirpath, dirnames, filenames) in os.walk(FLATPAGES_ROOT):
        dirnames.sort(reverse=True)

        if started == 0:
            started = 1
            continue

        shortdirpath = dirpath[len(FLATPAGES_ROOT):]

        for filename in filenames:
            if filename[-5] == ".html" or filename == ".DS_Store":
                continue

            url = "./" + dirpath[len(FLATPAGES_ROOT):] + "/" + filename
            thumb = "/" + dirpath[len(FLATPAGES_ROOT):] + "/" + filename
            jsons.append( jsonify(image=url,thumb=thumb,folder=shortdirpath) )

    # return the jasonified stuff
    output = "[" + ",".join([item.get_data() for item in jsons]) + "]"

    return output

# Route that will process a POST ajax request (_upload), pull out the
# uploaded file, save it to a directory based on the referrer
# which is the name of our journal file,
# then, responds with a call to the CKEDITOR callback, with the selected URL.
@app.route('/_upload', methods=['POST'])
def upload():

    funcnum = request.args.get('CKEditorFuncNum', 0, type=str)

    incomingfile = request.files.get('upload')

    referrer = request.referrer
    basedirectory = FLATPAGES_ROOT + urlparse(referrer).path.translate(None, '/')

    if not os.path.exists(basedirectory):
        os.makedirs(basedirectory)

    targetfilename = basedirectory + "/" + incomingfile.filename

    f = open(targetfilename, 'w')
    incomingfile.save(f)
    f.close()

    url = "./" + urlparse(referrer).path.translate(None, '/') + "/" + incomingfile.filename

    output = """<script type='text/javascript'> window.parent.CKEDITOR.tools.callFunction(""" + funcnum + ", " + "'" + url + "', '' )</script>"

    return output

# Initialize the Flask application
if __name__ == '__main__':
    app.config['FLATPAGES_HTML_RENDERER'] = prerender_jinja

    app.run()
