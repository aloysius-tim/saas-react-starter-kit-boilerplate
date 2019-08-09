#!/usr/bin/env bash

git pull;

yarn install
yarn run build --release

docker rm -f app.saastr

docker build -t react-starter-kit .

docker run --name app.saastr \
-e "VIRTUAL_HOST=saastr.0x0.run" \
-e "LETSENCRYPT_HOST=saastr.0x0.run" \
-e "LETSENCRYPT_EMAIL=hello@0x0.run" \
-e "NODE_ENV=production" \
-e "PORT=8080" \
-e "VIRTUAL_PORT=8080" \
-p :8080 \
-d react-starter-kit

#docker run -d -e "APP=server.js" -e "WATCH=true" -p :8080 -v $(pwd)/build:/app dashersw/node-pm2
