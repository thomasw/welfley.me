from django.db import models

class Project(models.Model):
    name = models.CharField("Project Name", max_length=255)
    role = models.CharField("Your role", max_length=255)
    open_source = models.BooleanField("Open source", default=False)
    description = models.TextField("Project description (HTML is okay)")
    url = models.URLField("URL", blank=True)
    url_text = models.CharField("URL text", max_length=255, default="See this in action", blank=True)

    # Media
    icon = models.ImageField("Icon or Logo", upload_to='img/projects', blank=True)
    screenshot = models.ImageField(upload_to='img/projects', blank=True)
    screenshot_alt = models.CharField("Screenshot alt text", max_length=255, blank=True)
    flickr_embed_code = models.TextField("Flickr Embed Code (supersedes screenshot)", blank=True)

    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    modified = models.DateTimeField('Last Modified', auto_now=True, auto_now_add=False)