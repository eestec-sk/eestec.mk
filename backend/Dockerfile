FROM node:18-alpine AS builder

RUN apk add --no-cache python3 make g++

WORKDIR /app
COPY . .
RUN npm install
RUN npm rebuild sharp
RUN npm run build

EXPOSE 1337
CMD npm run start