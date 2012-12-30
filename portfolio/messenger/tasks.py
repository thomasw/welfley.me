import logging
from socket import error
from datetime import date

from django.conf import settings
from django.core.mail import send_mail
from django.template import Context, loader
from celery.decorators import task

from messenger.models import Message


@task
def send_message(message_id):
    """Retrieves a message object via the Django ORM and sends it to the
    address specified in the site's settings file.

    This will fail if the message limit is exceeded for the current date.

    """
    message = Message.objects.get(pk=message_id)
    max_messages = getattr(settings, 'MAX_MESSAGES_PER_DAY', 5)
    todays_messages = Message.objects.filter(
        created__gt=date.today(), created__lte=message.created)

    if message.computer:
        return False

    if len(todays_messages) < max_messages:
        t = loader.get_template('contact_form_email.html')
    elif len(todays_messages) == max_messages:
        t = loader.get_template('message_limit_reached_email.html')
        logging.info("Daily message limit reached.")
    else:
        logging.error("New message received, but the daily limit has been "
                      "exceeded. No e-mail notice will be sent.")
        return False

    try:
        send_mail(
            '%s Contact Form' % getattr(settings, 'EMAIL_SUBJECT_PREFIX', ''),
            t.render(Context({'message': message})), None,
            (getattr(settings, 'DEFAULT_FROM_EMAIL', 'info@NONE.TLD'),))
    except (error,):
        logging.error("Attempt to send e-mail failed.", exc_info=True)
        return False

    # Set the message's notice flag to True
    logging.info("Email notice from %s sent." % (message.email))
    message.notice_sent = True
    message.save()
