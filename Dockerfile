FROM timbru31/node-alpine-git

RUN apk add --no-cache nodejs

WORKDIR /app

RUN   git clone https://github.com/Shintai-X/Mini-Projet-Devops.git  && cd /app/Mini-Projet-Devops && npm install  

EXPOSE 80

CMD ["node", "/app/Mini-Projet-Devops/index.js"]




