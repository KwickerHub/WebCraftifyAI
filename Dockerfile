FROM nginx:alpine

RUN apt-get update && apt-get install -y nodejs npm

WORKDIR /app

COPY . /app

RUN cd /app && npm install

EXPOSE 80 

CMD ["npm", "start"]
