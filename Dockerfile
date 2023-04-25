FROM node:current-alpine3.17

RUN apk add --no-cache git



WORKDIR /app

RUN   git clone https://github.com/Shintai-X/Mini-Projet-Devops.git --branch main  && cd /app/Mini-Projet-Devops  && npm install   

EXPOSE 80

ENTRYPOINT ["node", "script.js"]

CMD ["node", "/app/Mini-Projet-Devops/index.js"]





