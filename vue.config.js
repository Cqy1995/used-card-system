module.exports = {
    // devServer: {
    //     proxy: 'http://localhost:8088'
    // }
    devServer: {
        port: 8080,
        host: 'localhost',
        proxy: {
            '/api': {
                target: 'http://localhost:8088', //服务器接口
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}