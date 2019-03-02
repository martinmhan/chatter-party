FROM node:10

WORKDIR /world-of-walkcraft

COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm", "start"]