#!/bin/bash

docker rm -f api.saastr

docker build -t api.saastr .

docker run  --name api.saastr \
            -p 3333:3333 \
            -e ENV_PATH=/api/.env.dev \
            -e "NODE_ENV=development" \
            -v $(pwd):/api \
            -d api.saastr

docker logs -f api.saastr
