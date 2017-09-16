// const exports = module.exports
const PRODUCTION = (process.env.NODE_ENV === "production")

exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': [/^(?!app)/],
      'app.js': /^app\//
    },
  },
  stylesheets: {
    joinTo: {
      'app.css': /^app/,
      'vendor.css': /^node_modules/
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
  nameCleaner: path => path.replace(/^app\//, '')
}