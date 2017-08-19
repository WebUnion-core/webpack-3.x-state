var path = require("path");

// 路径常量
var SRC_PATH = path.resolve(__dirname, "src");
var DIST_PATH = path.resolve(__dirname, "dist");

module.exports = {
    entry: [
        path.resolve(SRC_PATH, "entry.js")
    ],
    output: {
        path: DIST_PATH,
        publicPath: "./dist/",
        filename: "index.js"
    },
    module: {
        loaders: [
            {
                //CSS样式表打包
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
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
    }
}
