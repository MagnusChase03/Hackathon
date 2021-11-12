FROM ubuntu
RUN apt update
EXPOSE 3000
CMD ["npm", "start"]