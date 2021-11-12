FROM ubuntu
RUN apt-get -y update; exit 0
RUN apt-get -y install nodejs
RUN apt-get -y install npm
WORKDIR CODE
COPY . .
EXPOSE 3000
CMD ["npm", "start"]