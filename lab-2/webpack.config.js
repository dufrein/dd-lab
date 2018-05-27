const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const $ = require('jquery');

const config = {
    // entry point
    watch: true, // Если true, следит за изменениями и пересобирает проект

    context: path.resolve(__dirname, 'src'),

    entry: {
        // app: ['babel-polyfill', './index.js']
        app: path.resolve(__dirname, './src/usersList.js')
    },

    // output

    output: {
        path: path.resolve(__dirname, './dist'),
          filename: '[name].js'
        // filename: '[name].[hash].js'
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
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
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
        new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'    })
    ]
}

module.exports = config;