// const nextRoutes = require('next-routes')
// const routes = module.exports = nextRoutes()

// routes.add('index', '/', 'index')
// routes.add('about', '/about','test')
// routes.add('userlist', '/user', 'userlist')
// routes.add('adminlist', '/admin', 'adminlist')

const UrlPrettifier = require('next-url-prettifier').default

const routes = [
  {
    page: 'index',
    prettyUrl: '/'
  },
  {
    page: 'test',
    prettyUrl: '/about'
  },
  {
    page: 'userlist',
    prettyUrl: '/user'
  },
  {
    page: 'adminlist',
    prettyUrl: '/admin'
  },
  {
    page: 'movie',
    prettyUrl: '/movies/:id'
  }
  ,
  {
    page: 'category',
    prettyUrl: '/categories/:id'
  }
]

const urlPrettifier = new UrlPrettifier(routes)
exports.default = routes
exports.Router = urlPrettifier