# syntax=docker/dockerfile:1.4
FROM node:20.13.1
WORKDIR /app

COPY package.json ./
RUN npm install
