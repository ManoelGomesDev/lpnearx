FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# estágio de produção
FROM node:lts-alpine as production-stage

WORKDIR /app

COPY package.json next.config.js .env* ./
COPY --from=build-stage /app/public ./public
COPY --from=build-stage /app/.next ./.next
COPY --from=build-stage /app/node_modules ./node_modules
EXPOSE 3001
CMD ["node_modules/.bin/next", "start", "-p", "3002"]