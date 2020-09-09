const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    process.env.REACT_APP_BASE_API,
    createProxyMiddleware({
      target: 'https://www.easy-mock.com/mock/5f48c7e49279d93141e87028',
      changeOrigin: true,
      pathRewrite: {
        ['^' + process.env.REACT_APP_BASE_API]: ''
      },
      secure: false
    })
  )
}
