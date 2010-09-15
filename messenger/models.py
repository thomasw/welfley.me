import logging
from socket import error

from django.db import models
from django.db.models.signals import post_save

class Message(models.Model):
	email = models.EmailField("E-mail address", max_length=320)
	message = models.TextField()
	
	computer = models.BooleanField("Are you a computer?", default=False)
	notice_sent = models.BooleanField("E-mail notice sent", default=False)
	
	created = models.DateTimeField(auto_now=False, auto_now_add=True)
	modified = models.DateTimeField('Last Modified', auto_now=True, auto_now_add=False)
	
	
# Signals
def queue_message(sender, instance, created, **kwargs):
	from messenger import tasks
	if created:
		try:
			# Attempt to send the message asynchronously
			tasks.send_message.delay(instance.pk)
		except (KeyError, error) as e:
			logging.info("Unable to send the e-mail notice asynchronously. %s: %s" % (type(e), e))
			tasks.send_message(instance.pk)

post_save.connect(queue_message, sender=Message)
	
