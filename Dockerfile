FROM node:alpine as base
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN rm -rf node_modules && npm install
COPY . .
# RUN npm install
CMD ["node", "./index.js"]