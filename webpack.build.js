/**
 * @fileoverview webpack 配置文件 - 生产环境
 * @author liyifei
 * @date 2017/10
 */
const webpack = require('webpack');
const path = require('path');
// 通用配置
const commonConfig = require('./webpack.common.js');
// plugins
const extractTextPlugin = require('extract-text-webpack-plugin');
const uglifyPlugin = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const cleanPlugin = require('clean-webpack-plugin');

let buildConfig = {
    // 入口
    entry: {
        // 公共类库
        vendor: commonConfig.entry.vendor,
        // 业务
        page: commonConfig.entry.page
    },
    // 输出
    output: {
        path: path.resolve(__dirname, commonConfig.buildPath),
        publicPath: commonConfig.publicPath,
        filename: 'js/[name].[chunkhash:8].js'
    },
    // 模块，各种 loaders
    module: {
        rules: [
            // vue loader
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            // css loader
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }]
                })
            },
            // url loader
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: commonConfig.publicPath,
                        outputPath: commonConfig.imgPath,
                        limit: commonConfig.imgMaxSize
                    }
                }]
            }
        ]
    },
    // plugins
    plugins: [
        // 分离 css 文件
        new extractTextPlugin({
            filename: 'css/[name].[contenthash:8].css',
            allChunks: true
        }),
        // 分离公共类库
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest']
        }),
        // uglifyjs
        new uglifyPlugin(),
        // 清理发布目录
        new cleanPlugin(commonConfig.buildPath),
        // html 生成
        new htmlPlugin({
            filename: 'index.html',
            template: commonConfig.devPath + 'index.html'
        })
    ]
};

module.exports = buildConfig;
