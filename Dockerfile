FROM node:20.7.0-alpine
WORKDIR /app
COPY ./app/package.json ./
RUN  npm install
EXPOSE 8080
CMD ["npm", "run", "dev"]

