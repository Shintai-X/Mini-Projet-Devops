FROM node:current-alpine3.17

RUN apk add --no-cache git



WORKDIR /app

RUN   git clone https://github.com/Shintai-X/Mini-Projet-Devops.git --branch main  && cd /app/Mini-Projet-Devops  && npm install   

EXPOSE 80

RUN cp /app/Mini-Projet-Devops/update.sh /app/update.sh && \
    chmod +x /app/update.sh

ENTRYPOINT ["/app/update.sh"]



CMD ["node", "/app/Mini-Projet-Devops/index.js"]





