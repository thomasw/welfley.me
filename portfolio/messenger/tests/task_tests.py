from django.conf import settings
from django.test import TestCase
from mock import patch, Mock

from messenger.models import Message
from messenger.tasks import send_message


class SendMessageTask(TestCase):
    def setUp(self):
        self.send_mail_patcher = patch("messenger.tasks.send_mail")
        self.message_patcher = patch("messenger.tasks.Message.objects")
        self.send_mail = self.send_mail_patcher.start()
        self.message_objects = self.message_patcher.start()

        self.fake_message = Message(
            email='fake@fake.tld', message='hi', computer=False)
        self.fake_message.save = Mock()

        self.message_objects.get.return_value = self.fake_message
        self.message_objects.filter.return_value = []

        self.daily_limit = settings.MAX_MESSAGES_PER_DAY

    def test_should_send_the_message_if_not_at_daily_limit(self):
        send_message(1)
        self.assertTrue(self.send_mail.called)

    def test_should_send_an_alert_when_the_daily_limit_is_reached(self):
        self.message_objects.filter.return_value = [None] * self.daily_limit

        send_message(1)

        self.assertTrue(self.send_mail.called)

    def test_should_send_no_message_when_the_daily_limit_is_exceeded(self):
        too_many_messages = [None] * (self.daily_limit + 1)
        self.message_objects.filter.return_value = too_many_messages

        send_message(1)

        self.assertFalse(self.send_mail.called)

    def test_should_send_no_message_if_the_sender_is_a_computer(self):
        self.fake_message.computer = True
        self.assertFalse(send_message(1))

    def tearDown(self):
        self.send_mail_patcher.stop()
        self.message_patcher.stop()
