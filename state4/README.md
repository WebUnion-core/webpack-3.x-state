
## 介绍 ##

> 阶段四讲解的是 webpack 热更新的配置，参考资料：[webpack学习（三）—— webpack-dev-server](https://segmentfault.com/a/1190000007374078)

之前的 webpack 阶段示例中，我们都是手动使用`npm run build`命令来启动 webpack 打包资源，这种打包方式非常的麻烦，虽然有些人觉得不就是重新输入一遍打包指令吗？有什么麻烦的？但是，随着你做的页面中需要打包的资源增多，你会发现 webpack 打包一次资源所花费的时间越来越多，那么这个时候，你就快坐不住了吧。闲话说到这，接着开始讲解本阶段的几个重点。

### webpack-dev-server ###

webpack-dev-server 是一个小型的 Node.js Express 服务器，如果不是捆绑着热更新功能，我宁愿用 Express 自己搭一个服务器，因为这个服务器不适用于生产模式，就只是一个方便我们调试程序的测试用服务器。

首先使用`npm install --save-dev webpack-dev-server`安装 webpack-dev-server，然后就可以启动它了，启动它有两种模式，一种是命令行模式，用法可以参考引用资料；另一种是 Node.js API 模式，首先需要创建一个服务器脚本，名为 server.js(名字可自定义)，内容如下：

```
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

var config = require("./webpack.config.js");
config.entry.unshift("webpack-dev-server/client?http://localhost:8080/");

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, config.devServer);
server.listen(8080);
```

脚本中的端口可自定义，接着，在 webpack.config.js 中加入服务器配置：

```
...
devServer: {
    publicPath: "/dist/" //访问路径
},
...
```

之后，在根目录下创建一个HTML文件(我将其命名为 index.html)，在其中插入脚本：

```
<script src="http://localhost:8080/dist/bundle.js"></script>
```

`/dist/bundle.js`是 webpack 打包后的出口文件，要结合具体的 webpack.config.js 配置。最后，`node server.js`可以启动服务器，然后在浏览器地址栏输入`http:localhost:8080`可以查看到那个 index.html 页面。

### 热更新 ###

启动热更新只要在 webpack.config.js 中加入热更新插件：

```
...
plugins: [
    new webpack.HotModuleReplacementPlugin() //热更新插件
]
...
```

最后，你会神奇的发现，你源文件修改的内容，不用手动打包，就能够即时显示在页面中了。
