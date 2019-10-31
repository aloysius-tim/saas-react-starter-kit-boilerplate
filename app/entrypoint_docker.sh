#!/bin/bash

if [ "$NODE_ENV" = "development" ]; \
	then yarn start;  \
	else yarn run build --release; \
	pm2-runtime start pm2.json; \
fi
