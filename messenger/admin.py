from django.contrib import admin

from messenger.models import Message

class MessageAdmin(admin.ModelAdmin):
	list_display = ('pk', 'email', 'computer', 'notice_sent', 'message', 'modified', 'created')
	list_filter = ('computer', 'notice_sent',)
	search_fields = ['email', 'message']
	
admin.site.register(Message,MessageAdmin)