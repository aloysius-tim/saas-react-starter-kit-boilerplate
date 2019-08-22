FROM keymetrics/pm2:10-jessie

RUN apt-get update
RUN apt-get install -y curl --fix-missing
RUN apt-get install -y git --fix-missing
RUN apt-get install -y vim --fix-missing
RUN apt-get install -y build-essential --fix-missing

RUN apt-get install -y python --fix-missing

RUN npm install -g yarn --fix-missing

VOLUME ["/app"]
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
COPY yarn.lock /app

RUN yarn install --production

EXPOSE 3333

CMD [ "pm2-runtime", "start", "pm2.json" ]
