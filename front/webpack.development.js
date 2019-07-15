const merge = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');
const { port } = require('config');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: 'public',
        historyApiFallback: true,
        hot: true,
        overlay: true,
        port,
    },
    plugins: [new HotModuleReplacementPlugin()],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
});
