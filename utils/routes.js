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
  }
]

const urlPrettifier = new UrlPrettifier(routes)
exports.default = routes
exports.Router = urlPrettifier