FROM keymetrics/pm2:8-jessie

RUN apt-get update
RUN apt-get install -y curl --fix-missing
RUN apt-get install -y git --fix-missing
RUN apt-get install -y vim --fix-missing
RUN apt-get install -y build-essential --fix-missing

RUN apt-get install -y python --fix-missing

RUN npm install -g yarn --fix-missing

WORKDIR /app

COPY package.json /app
RUN yarn install

COPY . /app
RUN chmod 755 /app/entrypoint_docker.sh

EXPOSE 3000
CMD [ "/app/entrypoint_docker.sh" ]
