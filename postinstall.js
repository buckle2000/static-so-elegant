const fs = require('fs-extra')
const path = require('path')
fs.copySync(
  path.join(__dirname, 'node_modules/semantic-ui-css/themes/', ),
  path.join(__dirname, 'public/themes'))