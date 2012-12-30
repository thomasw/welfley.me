import subprocess

from testtube.helpers import pep8, pyflakes


def django_test_all(path):
    subprocess.call(['portfolio/manage.py', 'test'])

PATTERNS = (
    (r'.*\.py', [pep8, pyflakes, django_test_all]),
)
