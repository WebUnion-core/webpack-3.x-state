var webpack = require("webpack");
var path = require("path");

// 路径常量
var SRC_PATH = path.resolve(__dirname, "src");
var DIST_PATH = path.resolve(__dirname, "dist");

module.exports = {
    entry: [path.resolve(SRC_PATH, "entry.js")],
    output: {
        path: DIST_PATH,
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        publicPath: "/dist/" //访问路径
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() //热更新插件
    ]
};
