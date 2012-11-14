import logging
from socket import error

from django.db import models
from django.db.models.signals import post_save

log = logging.getLogger(__name__)


class Message(models.Model):
    email = models.EmailField("E-mail address", max_length=320)
    message = models.TextField()

    computer = models.BooleanField("Are you a computer?", default=False)
    notice_sent = models.BooleanField("E-mail notice sent", default=False)

    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    modified = models.DateTimeField('Last Modified', auto_now=True,
                                    auto_now_add=False)

    def send_message(self):
        """Send an e-mail notice about this message."""
        from messenger.tasks import send_message

        try:
            send_message.delay(self.pk)  # Async attempt.
        except (KeyError, error):
            log.info("Asynchronus e-mail send failed.", exc_info=True)
            send_message(self.pk)  # Syncrhonus


# Signals
def queue_message(sender, instance, created, **kwargs):
    if created:
        instance.send_message()

post_save.connect(queue_message, sender=Message)
