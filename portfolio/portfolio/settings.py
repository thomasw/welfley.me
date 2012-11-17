import os

from django import template


APP_ROOT = os.path.realpath(os.path.join(os.path.dirname(__file__), '../'))
PROJECT_ROOT = os.path.realpath(os.path.join(APP_ROOT, '../'))
DATA_DIR = os.path.join(PROJECT_ROOT, 'data/')

SITE_NAME = 'Your Name'

ADMINS = (
    ('Your Name', 'info@site.tld'),
)

MANAGERS = ADMINS

DEBUG = True
TEMPLATE_DEBUG = DEBUG

# Make this unique, and don't share it with anybody.
SECRET_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

# E-mail config
EMAIL_SUBJECT_PREFIX = '[%s] ' % (SITE_NAME,)
DEFAULT_FROM_EMAIL = 'info@site.tld'
SEND_BROKEN_LINK_EMAILS = False

if DEBUG:
    EMAIL_PORT = 1025

# Absolute path to the directory that holds media.
# Example: "/home/media/media.lawrence.com/"
MEDIA_ROOT = os.path.join(APP_ROOT, 'assets')

# URL that handles the media served from MEDIA_ROOT. Make sure to use a
# trailing slash if there is a path component (optional in other cases).
# Examples: "http://media.lawrence.com", "http://example.com/media/"
MEDIA_URL = '/assets/'

# URL prefix for admin media -- CSS, JavaScript and images. Make sure to use a
# trailing slash.
# Examples: "http://foo.com/media/", "/media/".
ADMIN_MEDIA_PREFIX = '/media/'

# Primary templates directory.
TEMPLATE_DIRS = (os.path.join(APP_ROOT, 'templates'),)

DATABASES = {
    'default': {
        # Add 'postgresql_psycopg2', 'postgresql', 'mysql', 'sqlite3'
        # or 'oracle'.
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(DATA_DIR, 'site.db'),
        'USER': '',
        'PASSWORD': '',
        'HOST': '',
        'PORT': '',
    }
}

LOGGING = {
    'version': 1,
    'disable_existing_loggers': True,
    'root': {
        'level': 'INFO' if not DEBUG else 'DEBUG',
        'handlers': ['file',],
    },
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse'
        }
    },
    'handlers': {
        'file' : {
            'class': 'logging.FileHandler',
            'filename': os.path.join(DATA_DIR, 'site.log'),
        },
        'mail_admins': {
            'level': 'ERROR',
            'filters': ['require_debug_false'],
            'class': 'django.utils.log.AdminEmailHandler'
        }
    },
    'loggers': {
        'django.request': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': True,
        },
    }
}

# Local time zone for this installation. Choices can be found here:
# http://en.wikipedia.org/wiki/List_of_tz_zones_by_name
# although not all choices may be available on all operating systems.
# On Unix systems, a value of None will cause Django to use the same
# timezone as the operating system.
# If running in a Windows environment this must be set to the same as your
# system time zone.
TIME_ZONE = 'UTC'

# Language code for this installation. All choices can be found here:
# http://www.i18nguy.com/unicode/language-identifiers.html
LANGUAGE_CODE = 'en-us'

SITE_ID = 1

# If you set this to False, Django will make some optimizations so as not
# to load the internationalization machinery.
USE_I18N = True

# List of all installed authentication backends
AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
)

# List of callables that know how to import templates from various sources.
TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
)

# List of template context processors
TEMPLATE_CONTEXT_PROCESSORS = (
    'django.contrib.auth.context_processors.auth',
    'django.core.context_processors.debug',
    'django.core.context_processors.i18n',
    'django.core.context_processors.media',
    'django.core.context_processors.static',
    'django.core.context_processors.tz',
    'django.contrib.messages.context_processors.messages',
    'portfolio.context_processors.default',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.cache.UpdateCacheMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.cache.FetchFromCacheMiddleware',
)

ROOT_URLCONF = 'portfolio.urls'

INSTALLED_APPS = (
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.admin',
    'django_extensions',
    'south',
    'compress',
    'messenger',
    'djcelery',
    'projects',
    'gunicorn',
)


LOGIN_URL = '/login/'
LOGOUT_URL = '/logout/'
LOGIN_REDIRECT_URL = '/'

BROKER_HOST = "localhost"
BROKER_PORT = 5672
BROKER_USER = "hoot"
BROKER_PASSWORD = "yay!"
BROKER_VHOST = "hoot"
CELERY_RESULT_BACKEND = "amqp"
CELERY_IGNORE_RESULT = True
CELERY_DISABLE_RATE_LIMITS = True
CELERY_SEND_EVENTS = True
CELERY_SEND_TASK_ERROR_EMAILS = True

CELERYD_LOG_LEVEL = "INFO"
CELERYD_LOG_FILE = 'celeryd.log'

CELERYBEAT_SCHEDULE_FILENAME = "schedule.db"
CELERYBEAT_LOG_FILE = 'celerybeat.log'
CELERYBEAT_LOG_LEVEL = "INFO"

# Maximum Messages Per Day. This is the maximum number of e-mail notices the
# contact form will send you each day. Once the limit is reached, the contact
# form will silently record new messages to the database, but will no longer
# notify you of their creation.
MAX_MESSAGES_PER_DAY = 10

CACHE_MIDDLEWARE_ANONYMOUS_ONLY = True
CACHE_MIDDLEWARE_KEY_PREFIX = 'welfleyme'
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
        #'BACKEND': 'django.core.cache.backends.memcached.MemcachedCache',
        'LOCATION': '127.0.0.1:11211',
        'TIMEOUT': 60 * 60,
    }
}

COMPRESS = True
COMPRESS_VERSION = True
COMPRESS_AUTO = DEBUG
COMPRESS_CSS = {
    'main': {
        'source_filenames': (
            'css/reset.css',
            'css/portfolio.css',
        ),
        'output_filename': 'css/portfolio.r?.css',
    },
    'ie': {
        'source_filenames': (
            'css/ie.css',
        ),
        'output_filename': 'css/ie.r?.css'
    }
}
COMPRESS_JS = {
    'main': {
        'source_filenames': (
            'js/jquery.tools.min.js',
            'js/googleAnalytics.js',
            'js/projects.js',
            #'js/form.js',
            'js/portfolio.js',
        ),
        'output_filename': 'js/portfolio.r?.js',
    },
}


# Add template tags
template.add_to_builtins('templatetags.utility_tags')

# Import local settings.
try:
    from local_settings import *
except ImportError:
    pass
