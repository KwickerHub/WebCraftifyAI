FROM nginx:alpine

RUN apk update \ 
    && apk add --no-cache nodejs npm \
    && rm -rf /var/cache/apk/**

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 80 

CMD ["npm", "start"]
