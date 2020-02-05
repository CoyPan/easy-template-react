/**
 * @file 产出product包时的配置
 */

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: {
        app: path.resolve(__dirname, '../../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../../dist'),
        filename: `[name].[hash:8].js`,
        chunkFilename: `[name].[chunkhash:8].js`,
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    
                }
            }, 'css-loader', 'postcss-loader', 'sass-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: `index.html`,
            template: path.resolve(__dirname, '../../src/template/template.html'),
            inject: true,
            minify: {
                collapseWhitespace: true
            }
        }),
        new ManifestPlugin({
            fileName: `assets-manifest.json`,
            filter: (FileDescriptor) => {
                return !/\.(html)$/.test(FileDescriptor.name)
            }
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new MiniCssExtractPlugin({
            filename:`[name].[contenthash:8].css`
        }),
        new OptimizeCssAssetsPlugin(),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin()
        ],
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /react|core-js/,
                    name: "vendors",
                    priority: -20,
                    chunks: "all"
                },
                common: {
                    chunks: "async",
                    name: 'commons',
                    minChunks: 2
                }
            }
        }
    }
};