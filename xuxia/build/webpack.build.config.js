var path = require("path")
var webpack = require("webpack")
var config = require("../config/config.js")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const baseWebpack = require("./webpack.base.config.js")
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = merge(baseWebpack, {
    devtool: config.build.devtool,
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "common.js",
            filename: "js/common.js"
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                include: /\/src/,
                compress: {
                    warnings: false
                },
                sourceMap: config.build.uglifyJsSourceMap,
                parallel: true //使用多进程并行运行和文件缓存来提高构建速度
            },
        })

    ],

})