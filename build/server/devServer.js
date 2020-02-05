/**
 * @file 本地开发时的server
 */

const chalk = require('chalk');
const webpack = require("webpack");
const express = require("express");
const merge = require('webpack-merge');

const devProxyConfig = require("../webpackConfig/devProxyConfig.js");
const devWebpackConfig = require("../webpackConfig/webpack.base.config.js");
const baseWebpackConfig = require("../webpackConfig/webpack.dev.config.js");
const app = express();

console.log(chalk.blue.bold.underline('dev build starts...\n'));

// webpack
const compiler = webpack(merge(baseWebpackConfig, devWebpackConfig));
app.use(require("webpack-dev-middleware")(compiler));
app.use(require("webpack-hot-middleware")(compiler));


// add proxyConfig
Object.keys(devProxyConfig).forEach(item => {
    const options = proxyConfig[item];
    app.use(item, require("http-proxy-middleware")(options));
});

// dev server port
const port = 8090;

// start dev server
app.listen(port, err => {
    if (err) throw err;
    console.log(chalk.blue.bold.underline(`server is running at: http://localhost:${port}\n`));
});


