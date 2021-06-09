
module.exports = {
    devServer: {
        // development server port 8000
        port: 8000,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8081/',     // 拦截到'api/wristband'的，将axios中baseURL替换成target
                ws: true,                                 // proxy websockets
                changeOrigin: true,                       // 是否跨域
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    },
}
