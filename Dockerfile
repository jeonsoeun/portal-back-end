FROM node:10-alpine3.10
MAINTAINER jse525@naver.com

RUN apk update && apk --no-cache add curl

WORKDIR /usr/src
COPY package.json yarn.* ./
RUN yarn install
COPY ./src ./src

EXPOSE 8080

CMD ["node", "src/index.ts"]