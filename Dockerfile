FROM node:15.4.0-alpine

WORKDIR /project

COPY . .

RUN yarn --silent

CMD [ "yarn", "start" ]