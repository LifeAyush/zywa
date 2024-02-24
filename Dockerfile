FROM node:alpine
WORKDIR /src/app
COPY package*.json .
RUN npm ci
# CMD ["node", "scripts/parseData.js"]
CMD ["node", "src/app.js"]