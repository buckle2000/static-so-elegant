// const exports = module.exports
const PRODUCTION = (process.env.NODE_ENV === "production")

exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^node_modules/,
      'app.js': /^app\//
    },
  },
  stylesheets: {
    joinTo: {
      'vendor.css': /^node_modules/,
      'app.css': /^app/
    }
  }
};

exports.plugins = {
  babel: { presets: ['latest'] },
  autoReload: {
    enabled: {
      css: true,
      js: true,
      assets: true
    }
  },
  pug: {
    basedir: 'app/layouts',
    staticBasedir: 'app/layouts',
    pugRuntime: false,
    preCompile: true,
    preCompilePattern: /\.pug$/
  }
};

if (process.env.NODE_ENV === 'production') {
  exports.npm = {
    styles: {
      'semantic-ui-css': ['semantic.min.css']
    },
  }
} else {
  exports.npm = {
    styles: {
      'semantic-ui-css': ['semantic.css']
    },
  }
}

exports.npm.globals = {
  '$': 'jquery',
  'jQuery': 'jquery'
}

exports.modules = {
  nameCleaner: path => path.replace(/^app\//, ''),
  autoRequire: {
    'app.js': ['app']
  }
}