var pkg = require('./package.json');
//var dirs = pkg['h5bp-configs'].directories;
var path = require("path");
var webpack = require('webpack');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var glob = require('glob');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

function getEntry() {
    var entry = {};
    glob.sync(__dirname + '/web/html/*/entry/*.main.js').forEach(function (name) {
        var keywords = name.match(/([^/]+?)\/entry\/([^/]+?)\.main\.js/);
        var n = keywords[1] + '_' + keywords[2];//chunkname
        entry[n] = name;
    });

    return entry;
}

module.exports = {
    refreshEntry: function () {
        this.entry = getEntry();
    },
    entry: getEntry(),
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.json', '.css'],
        /* 建议使用NPM作为包管理工具*/
        modulesDirectories: [
            'node_modules',
            'bower_components',
            'lib'
        ],
        alias: {
            /**配置全局插件**/
            normalize: 'node_modules/normalize.css/normalize.css',
            //modernizr: 'web/js/plugins/modernizr-custom.min.js',
            //jquery_easydropdown: 'web/js/plugins/jquery.easydropdown.min.js',
            /** 配置本地JS/CSS库目录 **/
            css_lib: 'web/css',
            js_lib: 'web/js',
            img_lib: 'web/images'
        }
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        // 配置全局插件 这里配置的插件直接由NPM管理
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: "jquery"
        })
    ],
    //devtool: 'source-map',
    output: {
        /**
         * 由于publicPath（因为contextPath不一样）在生生产模式和开发模式下都不一样，
         * 并且必须是在运行过程中才能获取，因此需多加此配置项
         */
        //publicPath: 'resources/js/',
        filename: '[name].all.js',
        //publicPathConfig: {
        //    production: 'http://www.yibugo.com.cn/resources/assets/',
        //    local_host: 'http://127.0.0.1:8081/yweb/resources/assets/',
        //    test_host:'http://192.168.0.4:9082/yweb/resources/assets/'
        //},
        publishRef: 'local_host'
        //sourceMapFilename: '[file].map'
    },
    //externals: {
    //    // require("jquery") is external and available
    //    //  on the global var jQuery
    //    // 在使用CDN的过程中，需要在页面上引入CDN script（注意加载顺序），external是引入bundle.js以外的变量，如CDN
    //    "jQuery": "jQuery"
    //},
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {   test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader'
            }
        ]
    }
};var pkg = require('./package.json');
//var dirs = pkg['h5bp-configs'].directories;
var path = require("path");
var webpack = require('webpack');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var glob = require('glob');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

function getEntry() {
    var entry = {};
    glob.sync(__dirname + '/web/ftl/*/entry/*.main.js').forEach(function (name) {
        var keywords = name.match(/([^/]+?)\/entry\/([^/]+?)\.main\.js/);
        var n = keywords[1] + '_' + keywords[2];//chunkname
        entry[n] = name;
    });

    return entry;
}

module.exports = {
    refreshEntry: function () {
        this.entry = getEntry();
    },
    entry: getEntry(),
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.json', '.css'],
        /* 建议使用NPM作为包管理工具*/
        modulesDirectories: [
            'node_modules',
            'bower_components',
            'lib'
        ],
        alias: {
            /**配置全局插件**/
            normalize: 'node_modules/normalize.css/normalize.css',
            //modernizr: 'web/js/plugins/modernizr-custom.min.js',
            //jquery_easydropdown: 'web/js/plugins/jquery.easydropdown.min.js',
            /** 配置本地JS/CSS库目录 **/
            css_lib: 'web/css',
            js_lib: 'web/js',
            img_lib: 'web/images'
        }
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        // 配置全局插件 这里配置的插件直接由NPM管理
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: "jquery"
        })
    ],
    //devtool: 'source-map',
    output: {
        /**
         * 由于publicPath（因为contextPath不一样）在生生产模式和开发模式下都不一样，
         * 并且必须是在运行过程中才能获取，因此需多加此配置项
         */
        //publicPath: 'resources/js/',
        filename: '[name].all.js',
        //publicPathConfig: {
        //    production: 'http://www.yibugo.com.cn/resources/assets/',
        //    local_host: 'http://127.0.0.1:8081/yweb/resources/assets/',
        //    test_host:'http://192.168.0.4:9082/yweb/resources/assets/'
        //},
        publishRef: 'local_host'
        //sourceMapFilename: '[file].map'
    },
    //externals: {
    //    // require("jquery") is external and available
    //    //  on the global var jQuery
    //    // 在使用CDN的过程中，需要在页面上引入CDN script（注意加载顺序），external是引入bundle.js以外的变量，如CDN
    //    "jQuery": "jQuery"
    //},
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {   test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader'
            }
        ]
    }
};