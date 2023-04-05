# syntax=docker/dockerfile:1.4
FROM node:16.18.0
WORKDIR /app

COPY package.json ./
RUN npm install
