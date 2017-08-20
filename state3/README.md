
## 介绍 ##

> 阶段三讲解的是 webpack 常用的 plugin 的使用方法，参考资料：[react+webpack项目常用的插件(plugins)](https://segmentfault.com/a/1190000009120632)

### HtmlWebpackPlugin ###

非原生插件，需引入模块 html-webpack-plugin，此插件用于简化创建生成 HTML 文件，如果引入文件中带有 hash 值的话，这个插件就特别有用，不需要手动去更改引入的文件名。

关于 HtmlWebpackPlugin 的详细讲解，参考资料：[html-webpack-plugin用法全解](https://segmentfault.com/a/1190000007294861)

### ExtractTextWebpackPlugin ###

非原生插件，需引入模块 extract-text-webpack-plugin，此插件用于分离样式表，webpack 中引入样式实际上是在页面中动态生成 style 标签植入样式，众所周知，这种做法极不利于维护，ExtractTextWebpackPlugin 可以帮助我们将样式文件单独打包，这样更利于页面样式的维护。

### CleanWebpackPlugin ###

非原生插件，需引入模块 clean-webpack-plugin，此插件用于在打包前清除打包目标目录下的所有文件。

### CommonsChunkPlugin ###

原生插件，实为 webpack.optimize.CommonsChunkPlugin，此插件用于单独打包公共模块，但 CommonsChunkPlugin 有一个问题，那就是原本提取的公共模块本不因随着每次修改其他代码而发生变化，然而事实是每次修改自己的代码后使用 webpack 打包时，webpack 会重新返回一个 hash，只要 hash 变化，导出的公共模块也会跟着变化，最终导致每次公共模块都会重载。
