# Welfley.me

This repository contains the source code for [welfley.me](http://welfley.me/) (Thomas Welfley's portfolio).

## Setting up Your Development Environment
Using [pip](http://pypi.python.org/pypi/pip) + [virtualenv](http://pypi.python.org/pypi/virtualenv) (or [pythonbrew](https://github.com/utahta/pythonbrew) if you're cool) is a really good idea. If you're doing things that way already, setup a new virtual environment and use the [requirements.txt](http://github.com/thomasw/welfley.me/blob/master/requirements.txt) file to install the necessary libraries. If you're not, check out Eliot's [PIP + virtualenv crash course](http://www.saltycrane.com/blog/2009/05/notes-using-pip-and-virtualenv-django/).

If you don't want to use virtualenv, you can do things this way using just pip:

    > git clone git://github.com/thomasw/welfley.me.git
    > cd welfley.me/
    > sudo pip install -r requirements.txt

Override settings.py to your liking by dropping a `local_settings.py` file in `welfley.me/portfolio/portfolio/`

    > ./manage.py runserver

After that, your local instance of [welfley.me](http://welfley.me/) should be accessible to you [here](http://127.0.0.1:8000), but you probably already knew that.

## Everything else
Copyright (c) [Thomas Welfley](http://welfley.me/). See [LICENSE](http://github.com/thomasw/welfley.me/blob/master/LICENSE) for details.
