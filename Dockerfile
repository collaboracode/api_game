FROM node:alpine as base
RUN npm install -g nodemon
# RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
COPY . .
# RUN rm -rf node_modules && npm install
RUN npm install
CMD ["nodemon", "-L", "./index.js"]