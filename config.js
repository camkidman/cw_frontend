System.config({
  packages: {
    app: {
      format: 'register',
      defaultExtension: 'js'
    }
  },
  map: {
    'angular2-jwt': 'node_modules/angular2-jwt/angular2-jwt.js',
  }
});
System.import('app/boot').then(null, console.error.bind(console));
