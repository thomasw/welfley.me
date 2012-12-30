from django.conf import settings
from django.conf.urls.defaults import patterns, include, url
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.generic.base import TemplateView

admin.autodiscover()

urlpatterns = patterns(
    '',
    (r'^contact_me/', include('messenger.urls')),
    (r'^projects/', include('projects.urls')),
    (r'^manage/doc/', include('django.contrib.admindocs.urls')),
    (r'^manage/', include(admin.site.urls)),
    url(r'^logout/$', 'django.contrib.auth.views.logout', name='logout'),
    url(r'^$', TemplateView.as_view(template_name='home.phtml'),
        name='index'),
    url(r'^resume/$', TemplateView.as_view(template_name='resume.phtml'),
        name='resume'),
)

# 404 & 500 debug

if settings.DEBUG:
    urlpatterns += patterns(
        '',
        (r'^500/$', 'django.views.defaults.server_error'),
        (r'^404/$', TemplateView.as_view(template_name='404.html')),
    )

# Serve static files

urlpatterns += staticfiles_urlpatterns()

# Serve user uploads

if settings.DEBUG:
    urlpatterns += patterns(
        '',
        url(r'^media/(?P<path>.*)$', 'django.views.static.serve',
            {
                'document_root': settings.MEDIA_ROOT
            }),
    )
