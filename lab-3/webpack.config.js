const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
    // entry point
    watch: true, // Если true, следит за изменениями и пересобирает проект
 devtool: 'eval',
 

    entry: {
        app: ['babel-polyfill', './index.js'],
    },

    // output

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[hash].js'
    },

    // tranforms

    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env',  'stage-2' ]
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
        ],

    },

    plugins: [
        new CleanWebpackPlugin([
            'dist'
        ], {
            watch: true,
        }),

        new HtmlWebpackPlugin({
            template: './index.html'
        }),

         new ExtractTextPlugin('style.css')
    ],

    devServer: {
        port: 3000
    }
}

module.exports = config;