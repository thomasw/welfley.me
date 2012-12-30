from django.conf.urls.defaults import patterns, url
from django.views.generic.base import TemplateView

from views import MessageCreate

urlpatterns = patterns(
    '',
    url(r'thanks/$', TemplateView.as_view(template_name='thank_you.phtml'),
        name='thanks'),
    url(r'$', MessageCreate.as_view(), name="contact_me"),
)
