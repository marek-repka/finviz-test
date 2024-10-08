FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5001

CMD ["npm", "run", "server"]