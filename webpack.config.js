const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: './app/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.tpl.html'}),
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules:[
            {
                test: /\.js$/,
                use:[
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: path.resolve(__dirname, "/node_modules/")
            },{
                test: /\.css/,
                use:['style-loader','css-loader']
            },{
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }
                ]
            },{
                test: /\.less$/,
                use:[
                    {
                        loader: "less-loader"
                    }
                ]
            }
        ]
    }
}