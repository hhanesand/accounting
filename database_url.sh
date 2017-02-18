#!/usr/bin/env bash

sed -i '' -e "/\bDATABASE_URL\b/d" ./.env
echo DATABASE_URL=$(heroku config:get DATABASE_URL) >> ./.env
