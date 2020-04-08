
FROM node:12-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081
EXPOSE 8080

CMD [ "npm", "start" ]
