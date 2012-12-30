import subprocess

from testtube.helpers import pep8_all, pyflakes_all


def django_test_all(path):
    subprocess.call(['portfolio/manage.py', 'test'])

PATTERNS = (
    (r'.*\.py', [pep8_all, pyflakes_all, django_test_all]),
)
