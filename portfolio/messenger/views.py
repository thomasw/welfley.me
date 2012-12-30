from django.core.urlresolvers import reverse_lazy
from django.views.generic.edit import CreateView

from forms import ContactForm
from models import Message


class MessageCreate(CreateView):
    model = Message
    success_url = reverse_lazy('thanks')
    form_class = ContactForm
    template_name = 'contact.html'
