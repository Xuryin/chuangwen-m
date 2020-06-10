# Citybrain nginx Dockerfile
# Version 1.0

# Base images 基础镜像
FROM nginx:1.16.0-alpine

#LABEL 维护者信息
LABEL yunyang yunyang

#ENV
ENV M_API_SITE ""
ENV WEBAPI_AUTH_HOST ""

#COPY
COPY ./dist /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/default.conf.template /etc/nginx/conf.d/default.conf.template

RUN chown -R nginx. /usr/share/nginx

#EXPOSE 映射端口
EXPOSE 7777

#CMD 运行以下命令
CMD ["/bin/sh", "-c", "envsubst '${M_API_SITE}','${WEBAPI_AUTH_HOST}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]

