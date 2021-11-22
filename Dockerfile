FROM node:16-alpine3.13

COPY ./ ./

RUN npm install

EXPOSE 8080

CMD ["npm","start"]
