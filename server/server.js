'use strict';

const loopback = require('loopback');
const boot = require('loopback-boot');

const app = module.exports = loopback();

const env = (process.env.NODE_ENV || 'development');
console.log('Environment: ', env);

if ('production' === env) {
  const forceSSL = () => {
    return (req, res, next) => {
      if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(
          ['https://', req.get('Host'), req.url].join('')
        );
      }
      next();
    }
  };
  app.use(forceSSL());
}

app.start = () => {
  // start the web server
  return app.listen(() => {
    const baseUrl = app.get('url').replace(/\/$/, '');
    app.emit('started');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
