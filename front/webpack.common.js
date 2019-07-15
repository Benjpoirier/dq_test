const config = require('config');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const { HashedModuleIdsPlugin, DefinePlugin } = require('webpack');
const { join, resolve } = require('path');

const APP_DIR = resolve(__dirname, 'public');
const BUILD_DIR = resolve(__dirname, 'src');
const HTML_DIR = resolve(__dirname, 'public');

const plugins = [
    new DefinePlugin({
        CONFIG: Object.entries(config).reduce((accumulator, [key, val]) => {
            accumulator[key] = JSON.stringify(val);
            return accumulator;
        }, {}),
    }),
    new HardSourceWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
        hash: true,
        template: join(HTML_DIR, 'index.template.html'),
    }),
    new ProgressPlugin(),
    new HashedModuleIdsPlugin(),
];

module.exports = {
    node: { fs: 'empty' },
    entry: {
        base: ['animate.css', '@babel/polyfill'],
        app: resolve(BUILD_DIR, 'index.js'),
    },

    module: {
        rules: [
            {
                test: /\.(eot|woff|woff2|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: '[name].[ext]',
                    },
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader?sourceMap',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    'postcss-loader?sourceMap',
                    'sass-loader?sourceMap',
                ],
            },
            {
                test: /\.(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader',
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'url-loader',
            },
        ],
    },
    plugins,
    output: {
        filename: 'assets/[name].[hash].bundle.js',
        chunkFilename: 'assets/[name].[hash].bundle.js',
        path: APP_DIR,
        publicPath: '/',
    },
};
