from django.template import Library, Node

register = Library()

# This code is borrowed almost directly from an article on writing custom
# template tags by James Bennet at b-list.org:
# http://www.b-list.org/weblog/2006/jun/07/django-tips-write-better-template-tags/

class LatestContentNode(Node):
    def __init__(self, model, num, varname):
        from django.db.models import get_model

        self.num, self.varname = num, varname
        self.model = get_model(*model.split('.'))

    def render(self, context):
        context[self.varname] = self.model._default_manager.all()[:self.num]

        return ''

@register.tag
def get_latest(parser, token):
    bits = token.contents.split()
    if len(bits) != 5:
        raise TemplateSyntaxError, "get_latest tag takes exactly four arguments"
    if bits[3] != 'as':
        raise TemplateSyntaxError, "third argument to get_latest tag must be 'as'"
    return LatestContentNode(bits[1], bits[2], bits[4])
