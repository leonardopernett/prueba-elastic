FROM node:14.4.0

WORKDIR /opt/elastic

COPY . .

RUN npm install --quiet

CMD ["node","/opt/elastic/src/index.js"]