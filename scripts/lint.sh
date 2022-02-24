#!/bin/sh

BLUE="\033[1;34m"
NC="\033[0m"

EXIT=0

ACTION=$([ "$1" = "fix" ] && echo "FIX" || echo "CHECK")
PRETTIER_FIX=$([ "$1" = "fix" ] && echo "--write" || echo "--list-different")
ESLINT_FIX=$([ "$1" = "fix" ] && echo "--fix" || echo "")

echo "$BLUE\n\n$ACTION: formatting of files supported by prettier\n$NC"
npx prettier . $PRETTIER_FIX || EXIT=$?

echo "$BLUE\n\n$ACTION: linting issues with javascript files$NC"
npx eslint . --ext .js,.jsx $ESLINT_FIX || EXIT=$?

[ $EXIT -gt 0 ] && exit 1

exit 0
