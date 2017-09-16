FROM node:8
WORKDIR /app

ADD . /app
RUN ["npm", "install"]
RUN ["npm", "install", "brunch", "-g"]
ENV NODE_ENV production
ENV PORT 80
# CMD ["npm", "build"]
RUN ["brunch", "build", "-p"]
CMD ["npm", "start"]
EXPOSE 80