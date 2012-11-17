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
MEDIA_ROOT = os.path.join(DATA_DIR, 'media/')

# URL that handles the media served from MEDIA_ROOT. Make sure to use a
# trailing slash if there is a path component (optional in other cases).
# Examples: "http://media.lawrence.com", "http://example.com/media/"
MEDIA_URL = '/media/'

# Absolute path to the directory static files should be collected to.
# Don't put anything in this directory yourself; store your static files
# in apps' "static/" subdirectories and in STATICFILES_DIRS.
# Example: "/home/media/media.lawrence.com/static/"
STATIC_ROOT = os.path.join(DATA_DIR, 'assets/')

STATICFILES_DIRS = (
    os.path.join(APP_ROOT, 'assets/'),
)

STATICFILES_STORAGE = 'pipeline.storage.PipelineCachedStorage'

# URL prefix for static files.
# Example: "http://media.lawrence.com/static/"
STATIC_URL = '/assets/'

# Primary templates directory.
TEMPLATE_DIRS = (os.path.join(APP_ROOT, 'templates'),)

# Disable migrations when running tests.
SOUTH_TESTS_MIGRATE = False

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
        'handlers': ['file', 'mail_admins'],
    },
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse'
        }
    },
    'handlers': {
        'file': {
            'class': 'logging.FileHandler',
            'filename': os.path.join(DATA_DIR, 'site.log'),
        },
        'mail_admins': {
            'level': 'ERROR',
            'filters': ['require_debug_false'],
            'class': 'django.utils.log.AdminEmailHandler'
        }
    },
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
USE_I18N = False
USE_L10N = False

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
    'django.contrib.staticfiles',
    'django.contrib.admin',
    'django_extensions',
    'south',
    'django_nose',
    'pipeline',
    'messenger',
    'djcelery',
    'projects',
    'devserver',
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
CELERYD_LOG_FILE = os.path.join(DATA_DIR, 'celeryd.log')

CELERYBEAT_SCHEDULE_FILENAME = os.path.join(DATA_DIR, 'schedule.db')
CELERYBEAT_LOG_FILE = os.path.join(DATA_DIR, 'celerybeat.log')
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

PIPELINE = False

PIPELINE_CSS = {
    'main': {
        'source_filenames': (
            'css/reset.css',
            'css/core.css',
        ),
        'output_filename': 'css/portfolio.css',
    },
    'ie': {
        'source_filenames': (
            'css/ie.css',
        ),
        'output_filename': 'css/ie_compatibility_layer.css'
    }
}

PIPELINE_CSS_COMPRESSOR = 'pipeline.compressors.csstidy.CSSTidyCompressor'

PIPELINE_JS = {
    'main': {
        'source_filenames': (
            'js/jquery.tools.min.js',
            'js/googleAnalytics.js',
            'js/projects.js',
            #'js/form.js',
            'js/core.js',
        ),
        'output_filename': 'js/portfolio.js',
    },
}

PIPELINE_JS_COMPRESSOR = 'pipeline.compressors.closure.ClosureCompressor'

PIPELINE_CLOSURE_BINARY = 'closure-compiler'

# Tests
TEST_RUNNER = 'django_nose.NoseTestSuiteRunner'
NOSE_ARGS = ['--with-spec', '--spec-color', '--where=%s' % APP_ROOT]

# Add template tags
template.add_to_builtins('projects.templatetags.utility_tags')
template.add_to_builtins('pipeline.templatetags.compressed')

# Import local settings.
try:
    from local_settings import *
except ImportError:
    pass
