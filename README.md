# So Elegant - a Docker-ready Frontend Framework

## Technology Included

- [Semantic UI](https://semantic-ui.com/)
- [Moon.js](https://moonjs.ga/)

- ES6
- Stylus
- Pug

## How to Use

- Clone this repo
- `npm install`

Command | Effect
-|-
`npm run dev` | start development server
`npm start`   | build & start production server
`brunch b`    | build once

## How to Deploy

### ZEIT NOW

First, read this: [now.sh index page](https://now.sh/)

Then, run `now` in this repo and choose `Docker image`, and your website is online!

### Docker

Just compile this directory as an docker image.

### Copy & Paste

For people who prefer to host the website somewhere else:

1. Delete `public/`
2. Run `brunch b -p`
3. Copy `public/` to the place where the website is served

## Directory Structure

File | Description
-|-
`app/app.js`   | user-defined script
`app/app.styl` | user-defined stylesheet
`app/assets/`  | static assets
`app/layouts/` | pug templates & includes
`public/`      | generated build

## **Attention!**

The generated website can only be hosted at the root of a domain/subdomain, for example:

- `example.com/*`
- `abc.example.com/*`
- `four.three.example.com/*`
- `user.github.io/*`

This template does **not** work with the following URLs.
Changes to `<a>, <link>, <script>` targets/links are required.

- `user.github.io/project/*`
- `example.com/subwebsite/*`