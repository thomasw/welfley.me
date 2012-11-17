from django.conf import settings
from django.conf.urls.defaults import patterns, include, url
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.generic.simple import direct_to_template


admin.autodiscover()

urlpatterns = patterns('',
    (r'^contact_me/', include('messenger.urls')),
    (r'^projects/', include('projects.urls')),
    (r'^manage/doc/', include('django.contrib.admindocs.urls')),
    (r'^manage/', include(admin.site.urls)),
    url(r'^logout/$', 'django.contrib.auth.views.logout', name='logout')
)

# 404 & 500 debug
if settings.DEBUG:
    urlpatterns += patterns('',
        (r'^500/$', 'django.views.defaults.server_error'),
        (r'^404/$', 'django.views.generic.simple.direct_to_template', {
            'template': '404.html'
        }),
    )

# Generic Views
urlpatterns += patterns('',
    url(r'^$', direct_to_template, {'template': 'home.phtml'}, name='index'),
    url(r'^resume/$', direct_to_template, {'template': 'resume.phtml'},
        name='resume'),
)

# Static files
urlpatterns += staticfiles_urlpatterns()
