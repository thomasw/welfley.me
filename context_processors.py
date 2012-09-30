from django.conf import settings

def default(request):
	"""Extends the default context."""
	return {'DEBUG': getattr(settings,'DEBUG', False), 
			'SITE_NAME': getattr(settings,'SITE_NAME', False),
			'GA_ACCOUNT': getattr(settings,'GA_ACCOUNT', 'nope'),
			'path': request.META['PATH_INFO'],
			'domain':request.get_host(),}