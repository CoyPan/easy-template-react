/**
 * @file 打包时的server
 */

const chalk = require('chalk');
const webpack = require("webpack");
const merge = require('webpack-merge');

const buildWebpackConfig = require("../webpackConfig/webpack.build.config.js");
const baseWebpackConfig = require("../webpackConfig/webpack.base.config.js");

console.log(chalk.blue.bold.underline('production build starts...\n'));

const webpackConfig = merge(baseWebpackConfig, buildWebpackConfig);

// webpack
webpack(webpackConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
        // Handle errors here
    }
    console.log(stats.toString({
        chunks: true,  // Makes the build much quieter
        colors: true    // Shows colors in the console
    }));
});


