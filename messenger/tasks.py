import logging
from socket import error
from datetime import date

from django.core.mail import send_mail
from django.template import Context, loader

from django.conf import settings
from celery.decorators import task
from messenger.models import Message

@task
def send_message(message_id):
    """ Retrieves a message object via the Django ORM and sends it to the
        address specified in the site's settings file.

        This will fail if the message limit is exceeded for the current date.
    """
    message = Message.objects.get(pk=message_id)

    if message.computer:
        return False

    todays_messages = Message.objects.filter(created__gt=date.today(), created__lte=message.created)
    max_messages = getattr(settings, 'MAX_MESSAGES_PER_DAY', 5)

    if len(todays_messages) < max_messages:
        t = loader.get_template('contact_form_email.phtml')
    elif len(todays_messages) == max_messages:
        t = loader.get_template('message_limit_reached_email.phtml')
        logging.info("Daily message limit reached.")
    else:
        logging.debug("New message received, but the daily limit has been exceeded. No e-mail notice will be sent.")
        return False

    try:
        send_mail(getattr(settings,'EMAIL_SUBJECT_PREFIX','')+'Contact form', \
            t.render(Context({'message':message})), None, \
            (getattr(settings, 'DEFAULT_FROM_EMAIL', 'info@NONE.TLD'),))
    except (error,), e:
        logging.error("Attempt to send e-mail failed. Probably unable to connect to smtp server %s: %s" % (type(e), e))
        return False

    # Set the message's notice flag to True
    logging.debug("Email notice from %s sent." % (message.email))
    message.notice_sent = True
    message.save()
