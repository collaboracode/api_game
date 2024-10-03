FROM node:18 as base
RUN npm install -g nodemon
# RUN mkdir -p /app
WORKDIR /app
# WORKDIR .

COPY package*.json /app/
RUN npm install --silent
COPY . /app
# RUN rm -rf node_modules
CMD ["nodemon", "-L", "./index.js"]
# CMD ["npm", "start"]
# CMD npm start