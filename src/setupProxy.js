const proxy = require('http-proxy-middleware')
module.exports = function (app) {
    // ...You can now register proxies as you wish!
    app.use(proxy('/Upload', {
        target: 'http://benz-h6.ccw.lab',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            '^/Upload': '/Upload'
        }
    }))
    app.use(proxy('/api', {
        target: 'http://benz-h6.ccw.lab',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/api'
        }
    }))
}
