FROM keymetrics/pm2:10-jessie

RUN apt-get update
RUN apt-get install -y curl --fix-missing
RUN apt-get install -y git --fix-missing
RUN apt-get install -y vim --fix-missing
RUN apt-get install -y build-essential --fix-missing

RUN apt-get install -y python --fix-missing

WORKDIR /api

COPY package.json /api
COPY yarn.lock /api
RUN yarn install --production

VOLUME ["/api"]

EXPOSE 3333

CMD [ "pm2-runtime", "start", "pm2.json" ]
