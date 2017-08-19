
## 介绍 ##

> 阶段一是构建一个可以正常启动的 webpack 框架，webpack.config.js 中仅配置 entry 和 out，在 entry 中写入的 JavaScript 代码打包导出到 dist 目录下的 index.js 文件中，如果不存在 dist 目录，不必手动创建，webpack 会自动创建。

### 关于output的path和publicPath ###

path：用于存放打包后文件的输出目录，常用绝对路径，获取绝对路径可以使用 path 模块的 resolve 方法；

publicPath：指定资源文件引用的目录，简单来说就是让 HTML 页面能根据这个目录获取到资源，常用相对路径。

参考资料：[webpack path和publicPath作用](http://m.blog.csdn.net/kcetry/article/details/53300331)
