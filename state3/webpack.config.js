var webpack = require("webpack");
var path = require("path");

// 路径常量
var SRC_PATH = path.resolve(__dirname, "src");
var DIST_PATH = path.resolve(__dirname, "dist");

//引入非原生插件
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        index: path.resolve(SRC_PATH, "entry.js"),
        vendor: ["jquery"] //引入公用模块(以jquery为例)
    },
    output: {
        path: DIST_PATH,
        publicPath: "./dist/",
        filename: "[name].[hash:8].js", //出口名不能固定不变
        chunkFilename: "[name].[hash:8].js"
    },
    module: {
        loaders: [
            {
                //CSS样式表打包
                test: /\.css$/,
                loaders: ExtractTextWebpackPlugin.extract({
                    use: ["css-loader"], //使用的loader
                    fallback: "style-loader"
                })
            },
            {
                //图像打包
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: "url-loader?limit=8192"
            },
            {
                //字体及svg打包
                test: /\.(woff|ttf|tff|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, "index.html"), //生成html文件名，默认为index.html
            template: path.resolve(__dirname, "template.html"), //选择模板文件
            hash: false
        }),

        new ExtractTextWebpackPlugin("[name].[hash:8].css"), //参数是输出的CSS文件URL

        //第一个参数是要清除的目标目录下的指定文件或目录的数组
        new CleanWebpackPlugin([
            DIST_PATH,
            path.resolve(__dirname, "index.html")
        ]),

        //names数组元素与entry集合的键一一对应
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor"]
        }),
    ]
}
