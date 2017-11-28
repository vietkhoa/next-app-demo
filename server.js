const express = require('express');
const next = require('next');
const { parse } = require('url');
const proxy = require ('express-http-proxy');

const DEV = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

console.log(DEV, process.env.ENVIRONMENT)

const app = next({dir: '.', dev: DEV});
const handle = app.getRequestHandler();

const routes = require('./utils/routes').Router;

// const handler = routes.getRequestHandler(app)


app.prepare()
.then(() => {
  const server = express()

  server.use(
    '/api',
    proxy('http://react-ssr-api.herokuapp.com', {
      proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
      }
    })
  );

  routes.forEachPattern((page, pattern, defaultParams) => server.get(pattern, (req, res) =>{
    app.render(req, res, `/${page}`, Object.assign({}, defaultParams, req.query, req.params))
    return;
  }
  ))

  server.get('*', (req, res) => handle(req, res))

  
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready for liftoff: http://localhost:${PORT}`);
  });
})