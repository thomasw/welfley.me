#!/bin/bash
set -eux

cd "$(dirname "$0")/.."

status=0

scripts/lint.sh || status=1
env CI=1 npm run test || status=1

exit $status
