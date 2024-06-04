FROM node:alpine as base
WORKDIR /app
COPY package.json package.lock.json
RUN sudo rm -rf node_modules && npm install
# RUN npm install
COPY . .
CMD ["node", "./index.js"]