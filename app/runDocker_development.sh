#!/bin/bash

docker rm -f app.saastr

docker build -t app.saastr .

docker run  --name app.saastr \
            -p 3000:3000 \
            -e NODE_ENV=development \
            -d app.saastr
