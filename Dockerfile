FROM node:16-alpine3.12

ENV API_URL=http://localhost:8080

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000 8080