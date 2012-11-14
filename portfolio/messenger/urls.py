from django.conf.urls.defaults import patterns, url
from django.views.generic.simple import direct_to_template
from django.views.generic.create_update import create_object

from messenger.forms import ContactForm

urlpatterns = patterns('',
    url(r'thanks/$', direct_to_template, {'template': 'thank_you.phtml'},
        name='thanks'),
    url(r'$', create_object, {
        'template_name': 'contact.phtml',
        'post_save_redirect': 'thanks/',
        'form_class': ContactForm,
    }, name="contact_me"),
)
