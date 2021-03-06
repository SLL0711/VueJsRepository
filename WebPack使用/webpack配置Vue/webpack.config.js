const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        // url资源找不到的情况下 配置该属性.默认以index.html为相对路径参照
        // publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                // 正则匹配css文件应用(use)一下loader
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'img/[name]-[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    },
    plugins: [
        new webpack.BannerPlugin('最终版权归SHENLILIN所有'),
        new HtmlWebpackPlugin({
            template:'index.html'
        }),
        new UglifyJsPlugin({
            test: /\.js($|\?)/i
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline:true,
        port:8080,
      }
}