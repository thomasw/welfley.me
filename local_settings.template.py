import logging
import os

SITE_NAME='Your Name'

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

SITE_ROOT = os.path.realpath(os.path.dirname(__file__))

# Location of project directory.
SITE_ROOT = os.path.realpath(os.path.dirname(__file__))

# Absolute path to the directory that holds media.
# Example: "/home/media/media.lawrence.com/"
MEDIA_ROOT = os.path.join(SITE_ROOT, 'assets')

# URL that handles the media served from MEDIA_ROOT. Make sure to use a
# trailing slash if there is a path component (optional in other cases).
# Examples: "http://media.lawrence.com", "http://example.com/media/"
MEDIA_URL = '/assets/'

# URL prefix for admin media -- CSS, JavaScript and images. Make sure to use a
# trailing slash.
# Examples: "http://foo.com/media/", "/media/".
ADMIN_MEDIA_PREFIX = '/media/'

# Primary templates directory.
TEMPLATE_DIRS = (os.path.join(SITE_ROOT, 'templates'),)

DATABASES = {
	'default': {
		'ENGINE': 'django.db.backends.sqlite3', # Add 'postgresql_psycopg2', 'postgresql', 'mysql', 'sqlite3' or 'oracle'.
		'NAME': 'site.db',						# Or path to database file if using sqlite3.
		'USER': '',						 # Not used with sqlite3.
		'PASSWORD': '',					 # Not used with sqlite3.
		'HOST': '',						 # Set to empty string for localhost. Not used with sqlite3.
		'PORT': '',						 # Set to empty string for default. Not used with sqlite3.
	}
}

# Logging Configuration
logging.basicConfig(
	level = logging.INFO,
	format = '%(asctime)s %(levelname)s %(message)s',
	filename = os.path.join(SITE_ROOT, 'site.log'),
	filemode = 'a',
)

# djanog-compress settings.
# Insert link or script tags for compressed JS/CSS files - must run ./manage.py synccompress
# If false, this inserts the uncompressed version. Use this in development.
COMPRESS = False

# Add version strings to compressed files
COMPRESS_VERSION = True

# Automatically generate new compressed JS and CSS files without running synccompress - only use this in DEV
COMPRESS_AUTO = DEBUG

# Celery configuration
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

# Celeryd
CELERYD_LOG_LEVEL = "INFO"
CELERYD_LOG_FILE = 'celeryd.log'

# Celerybeat
CELERYBEAT_SCHEDULE_FILENAME = "schedule.db"
CELERYBEAT_LOG_FILE = 'celerybeat.log'
CELERYBEAT_LOG_LEVEL = "INFO"

# Maximum Messages Per Day. This is the maximum number of e-mail notices the
# contact form will send you each day. Once the limit is reached, the contact
# form will silently record new messages to the database, but will no longer
# notify you of their creation.
MAX_MESSAGES_PER_DAY = 10

# Cache Settings
CACHE_BACKEND = 'memcached://127.0.0.1:11211/'
if DEBUG == True:
	CACHE_BACKEND = 'dummy:///'

CACHE_MIDDLEWARE_ANONYMOUS_ONLY = True
CACHE_MIDDLEWARE_SECONDS = 60*60
CACHE_MIDDLEWARE_KEY_PREFIX = 'welfleyme'

# Django Sentry
SENTRY_REMOTE_URL = 'https://xxxxxxxxxx/sentry/store/'
SENTRY_KEY = 'xxxxxxxxxxxx'

logger = logging.getLogger()
# ensure we havent already registered the handler
if SentryHandler not in map(lambda x: x.__class__, logger.handlers):
	logger.addHandler(SentryHandler())

	# Add StreamHandler to sentry's default so you can catch missed exceptions
	logger = logging.getLogger('sentry.errors')
	logger.propagate = False
	logger.addHandler(logging.StreamHandler())

# Uncomment to add a debug toolbar if in DEBUG mode - requires debug_toolbar
# Add the debug toolbar if in debug mode
#if DEBUG == True:
#	MIDDLEWARE_CLASSES = MIDDLEWARE_CLASSES+('debug_toolbar.middleware.DebugToolbarMiddleware',)
#	INTERNAL_IPS = ('127.0.0.1',)
#	INSTALLED_APPS = INSTALLED_APPS + ('debug_toolbar',)