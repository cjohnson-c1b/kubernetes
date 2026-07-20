# FRONTEND DOCKERFILE - REACT
# goal: create a runnable environment

# BUILD REACT APP
FROM node:lts-alpine as build

WORKDIR /app

COPY package*.json ./  

RUN npm ci

COPY . . 

RUN npm run build

# SERVE WITH NGINX 
FROM nginx:alpine as production

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]