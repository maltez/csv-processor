var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, 'src/main.js'),

    output: {
        filename: 'bundle.js',
        publicPath: path.join(__dirname, 'build'),
        path: path.join(__dirname, 'build')
    },
    plugins:[new webpack.HotModuleReplacementPlugin()],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: [/node_modules/, /build/]
            }
        ]
    },
    devtool:'source-map',
    watch: true,
    devServer: {
        inline:true,
        port: 3001,
        hot: true,
        host: 'localhost',
        contentBase: "./",
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    }

};
