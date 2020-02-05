const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@lib': path.resolve(__dirname, '../../src/lib')
        }
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.(png|jpe?g|gif)(\?.*)?$/,
            loader: 'url-loader'
        }, {
            test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
            loader: 'url-loader'
        }]
    },
    externals: ['fs']
}