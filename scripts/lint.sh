#!/bin/bash
set -eux

cd "$(dirname "$0")/.."

status=0

npx stylelint src/**/*.{css,scss} || status=1
npx flow || status=1
npx eslint src/ || status=1

exit $status
