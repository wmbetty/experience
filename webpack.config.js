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
    }
}