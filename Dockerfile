FROM nginx:stable-alpine

COPY ./dist /usr/share/nginx/html/
COPY ./default.conf /etc/nginx/conf.d/

EXPOSE 5404
