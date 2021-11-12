FROM ubuntu
RUN apt -y update
EXPOSE 3000
CMD ["npm", "start"]