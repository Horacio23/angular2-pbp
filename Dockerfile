FROM node:latest

ADD . /home/angular-app

WORKDIR /home/angular-app

RUN npm i 
&& npm run webdriver:update

CMD ["npm","start"]