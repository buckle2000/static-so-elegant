FROM node:8
WORKDIR /app

ADD . /app
RUN ["npm", "install", "brunch", "-g"]
RUN ["npm", "install"]
ENV NODE_ENV production
ENV PORT 80
# prestart = build
CMD ["npm", "start"]
EXPOSE 80