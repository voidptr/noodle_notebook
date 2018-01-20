# NOODLE!

A quick and dirty python flask based lab notebook, using ckeditor and
jquery to save your lab notebooks locally.

## installing Noodle

    git clone --recursive https://github.com/voidptr/noodle_notebook.git

If you don't already have the packages flask, flask_flatpages, and markdown2 then you'll need to grab them.

    sudo pip3 install flask
    sudo pip3 install flask_flatpages
    sudo pip3 install markdown2

## Configuring Noodle (DO NOT SKIP)

Configure by editing the headers of app.py. Specifically, you’ll want to
change:

    FLATPAGES_ROOT = "../LabNotebooksRepository/"

If you leave it alone, it’ll assume you want to keep the data folder
(LabNotebooksRepository) alongside the noodle-labnotebooks folder. It
will also die ungracefully if it doesn’t exist. All paths are relative
to the app.py location.

## Running Noodle

To run:

    python app.py

Then, navigate to: <http://127.0.0.1:5000/>

## What is Noodle?

Noodle is a flat-file lab notebook that saves your files as plain html
in the location of your choice.

Features:

-   Data files are saved as flat HTML

-   Rich-Text editor (CKEditor)

-   Image uploads and browser

-   Background AJAX/JQuery data saving

-   Runs locally

-   Cross-platform

Requirements:

-   Python

-   Web Browser with Javascript

## Why does this exist? Why would you ever make this?

Essentially, all lab notebook software out there sucks in various ways.
They either use a proprietary, non-text-based file format (Word, Pages),
don't play well with Dropbox (Papers 2), require a database or an online
service (Evernote), aren't free (all of the above), or are lacking in
useful features, like rich-text formatting (iPython Notebook, Texts.io).

So, I made one that overcomes these shortcomings. The system is based
around Python, Flask, Flask-FlatPages, CKEditor, and JQuery. Noodle
stores all of your pages as plain html, so you can just open them up
natively in your browser, or text editor of choice without needing any
other tools. This makes them future proof, which is a BIG DEAL for
science. Relatedly, all the files are plain text, so you can use
whatever text-based searching or tagging tools/systems you feel like
using. Nothing is denied you by the format.

## Future Features

The choice of HTML is a slightly questionable one. I was originally
shooting for a MarkDown based system, with html tags thrown in for fancy
formatting. Unfortunately, it wasn’t super easy to do that with a
combination of CKEditor and Flask-FlatPages, so it’s been relegated to
the back-burner. For obvious reasons, MD would be better, so if you feel
like forking and adding that in, I would be grateful. There are some
partial hooks in there to add .md support, since flask-flatpages
natively supports it, but for now, this is good enough.

If you have any ideas, suggestions, or bug reports, feel free to get in
touch.

## TODO

- Add mechanism to detect changes to the files that didn't originate,
and give the user the opportunity to decide what to do (Overwrite, Reload)
