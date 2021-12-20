FROM node:slim

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g pm2

CMD ["npm", "run", "start"]
