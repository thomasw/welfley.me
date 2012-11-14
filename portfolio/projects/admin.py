from django.contrib import admin

from projects.models import Project


class ProjectAdmin(admin.ModelAdmin):
    list_display = ('pk', 'name', 'role', 'open_source', 'url',
                    'modified', 'created')
    list_display_links = ('pk', 'name', 'role', 'open_source')
    list_filter = ('open_source', 'role')
    search_fields = ['name', 'description', 'url', 'role']

admin.site.register(Project, ProjectAdmin)
