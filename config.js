System.config({
  packages: {
    app: {
      format: 'register',
      defaultExtension: 'js'
    }
  },
  map: {
    'angular2-jwt': 'node_modules/angular2-jwt/angular2-jwt.js',
    'browser': 'node_modules/angular2/platform/browser.js',
    'ng2-ui-auth': 'node_modules/ng2-ui-auth/export.js',
    'auth': 'node_modules/ng2-ui-auth/export.js'
  }
});
