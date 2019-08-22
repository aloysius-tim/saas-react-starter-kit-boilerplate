FROM keymetrics/pm2:8-jessie

RUN apt-get update
RUN apt-get install -y curl --fix-missing
RUN apt-get install -y git --fix-missing
RUN apt-get install -y vim --fix-missing
RUN apt-get install -y build-essential --fix-missing

RUN apt-get install -y python --fix-missing

RUN npm install -g yarn --fix-missing

WORKDIR /app
COPY . /app

RUN yarn install
RUN yarn run build --release

EXPOSE 3000

CMD [ "pm2-runtime", "start", "pm2.json" ]
