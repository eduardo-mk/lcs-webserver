#!/bin/sh
# Author: Eduardo Acosta M.
# Description: To wait backend services

# NextJS requires to hit the backend in order to 
# generate SSR pages. For example:
# - Payments API using stripe

LOCALHOST_IP=`node './_deploy/get-localhost-ip.js'`

echo "localhost-ip: ${LOCALHOST_IP}"
# Abort on any error (including if wait-for-it fails).
set -e

# Wait for the backend to be up, if we know where it is.
if [ -n "$BACKEND_HOST" ]; then
  /app/wait-for-it.sh "$BACKEND_HOST:${BACKEND_PORT:-4000}" # Optional value, defaults to 4000
fi

# # Run the main container command.
exec "$@" 
