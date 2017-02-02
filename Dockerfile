FROM node:latest

#Sets an environmental variable for the container
ENV HOME=/home/app/angular-app

#This creates a separate user so that we dont run the app as ROOT
RUN useradd --user-group --create-home --shell /bin/false app 
COPY . $HOME
RUN chown -R app:app $HOME/*

#Similar to running cd in linux
WORKDIR $HOME

#Runs the command that it was given
RUN npm install

#This step runs as a command (like RUN) after the image has been created
#This command is an entrypoint and does not create a layer
CMD ["npm","start"]