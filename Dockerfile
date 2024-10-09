FROM node:18

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn global add typescript

EXPOSE 6000

CMD ["yarn", "server"]