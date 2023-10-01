FROM node:20.7.0-alpine
WORKDIR /app
COPY ./* .
RUN  npm install
COPY . .
EXPOSE 8080
CMD ["npm", "run", "dev"]

