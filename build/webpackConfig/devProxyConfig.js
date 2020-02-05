/**
 * @file 本地开发时的代理设置
 */

module.exports = {
    '/api': {
        target: 'https://coypan.info',
        changeOrigin: true
    }
}