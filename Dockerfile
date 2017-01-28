FROM node:latest

ENV HOME=/home/app/angular-app

RUN useradd --user-group --create-home --shell /bin/false app 

COPY . $HOME
RUN chown -R app:app $HOME/*

WORKDIR $HOME

RUN npm install

CMD ["npm","start"]