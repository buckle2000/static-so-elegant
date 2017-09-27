FROM node:8
WORKDIR /app

ADD . /app
RUN ["npm", "install", "brunch", "-g"]
RUN ["npm", "install"]
ENV NODE_ENV production
ENV PORT 80
RUN ["npm", "run", "build"]
CMD ["npm", "start"]
EXPOSE 80