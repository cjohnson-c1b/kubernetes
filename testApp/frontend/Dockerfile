# FRONTEND DOCKERFILE - REACT
# goal: create a runnable environment

# BUILD REACT APP
FROM node:lts-alpine AS build

WORKDIR /app

COPY package*.json ./  

RUN npm ci

COPY . . 

RUN npm run build


# SERVE WITH NGINX 
FROM nginx:alpine AS production

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx/frontend-nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]