/**
 * @fileoverview webpack 配置文件 - 开发环境
 * @author liyifei
 * @date 2017/10
 */
const webpack = require('webpack');
const path = require('path');
// 通用配置
const commonConfig = require('./webpack.common.js');
// plugins
const htmlPlugin = require('html-webpack-plugin');

let devConfig = {
    // 入口
    entry: {
        // 公共类库
        vendor: commonConfig.entry.vendor,
        // 业务
        page: [commonConfig.entry.page]
    },
    // 输出
    output: {
        path: path.resolve(__dirname, commonConfig.devPath),
        publicPath: commonConfig.publicPath,
        filename: 'js/[name].js'
    },
    // 本地开发调试工具
    devServer: {
        contentBase: './src/',
        port: commonConfig.devPort
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
                use: ['style-loader', 'css-loader']
            },
            // url loader
            // 处理图片
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: commonConfig.publicPath,
                        outputPath: commonConfig.imgPath
                    }
                }]
            }
        ]
    },
    // 解析
    resolve: {
        // 别名
        alias: {
            // 默认使用运行时文件 vue.runtime.esm.js
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    // plugins
    plugins: [
        // 分离公共类库
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest']
        }),
        // html 生成
        new htmlPlugin({
            filename: 'index.html',
            template: commonConfig.devPath + 'index.html'
        })
    ]
};

module.exports = devConfig;
