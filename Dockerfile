FROM node:slim

ENV NODE_ENV=development

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 6400

CMD ["npm", "run", "dev"]
