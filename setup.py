## THIS SCRIPT DOES NOTHING PRODUCTIVE. :P
## TODO, configure noodle from in here.

from setuptools import setup

setup(name='NoodleNotebook', version='1.0',
      description='A quick and dirty python flask based lab notebook, using ckeditor and jquery to save your lab notebooks locally.',
      author='Rosangela Canino-Koning', author_email='noodle@voidptr.net',
      url='https://github.com/voidptr/noodle_notebook',

      #  Uncomment one or more lines below in the install_requires section
      #  for the specific client drivers/modules your application needs.
      install_requires=['flask', 'flask-flatpages'
      ],
     )

