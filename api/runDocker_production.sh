#!/bin/bash

docker rm -f api.saastr

docker build -t api.saastr .

docker run  --name api.saastr \
            -p 3333:3333 \
            -e ENV_PATH=/api/.env \
            -e "NODE_ENV=production" \
            -v $(pwd):/api \
            -d api.saastr

docker logs -f api.saastr
