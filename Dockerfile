
FROM node:12-slim

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . ./

EXPOSE 8081
EXPOSE 8080

CMD [ "npm", "start" ]

