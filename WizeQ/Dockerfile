FROM --platform=linux/aamd64 node:14.18.2
WORKDIR /usr/server/app

ADD package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

RUN npx prisma generate

CMD ["npm", "run", "start"]