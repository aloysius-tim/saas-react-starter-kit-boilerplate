FROM keymetrics/pm2:10-jessie

RUN apt-get update
RUN apt-get install -y curl --fix-missing
RUN apt-get install -y git --fix-missing
RUN apt-get install -y vim --fix-missing
RUN apt-get install -y build-essential --fix-missing

RUN apt-get install -y python --fix-missing

RUN yarn global add @adonisjs/cli

#VOLUME ["/api"]
WORKDIR /api

COPY package.json .
COPY yarn.lock .

RUN yarn install --production

COPY . .

EXPOSE 3333

CMD [ "pm2-runtime", "start", "pm2.json" ]
