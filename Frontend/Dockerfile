FROM node:18-alpine

WORKDIR /wikicareer

COPY public/ /wikicareer/public
COPY src/ /wikicareer/src
COPY package.json /wikicareer/

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]