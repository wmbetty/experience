/**
 * Created by Lenovo on 2016/7/27.
 */
//module.exports = {
//    entry: "./entry.js",
//    output: {
//        path: __dirname,
//        filename: "bundle.js"
//    },
//    module: {
//        loaders: [
//            { test: /\.css$/, loader: "style!css" }
//            //{ test: /\.css$/, loader: "o!css" }
//        ]
//    }
//};

var webpack = require("webpack");

var config = {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8000',
        'webpack/hot/dev-server',
        './src/main.js'
    ],
};

module.exports = {
    entry: './src/app.js',

    output: {
        path: './bin',
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    },

    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },

    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        })
    ]

}