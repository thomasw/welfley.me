from django import forms

from messenger.models import Message


class ContactForm(forms.ModelForm):
    class Meta:
        model = Message
        fields = ('email', 'message', 'computer')
