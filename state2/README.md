
## 介绍 ##

> 阶段二主要增加了 Loader 的用法，要让 webpack 解析各种资源(如CSS文件、图片、字体包文件等)并保证在页面中正常加载出来，就要在 webpack.config.js 文件中配置 Loaders 项，当然，配置这些 Loader 要事先安装这些模块。

- CSS 样式资源

    涉及 Loader 有：style-loader 和 css-loader，按顺序配置两者。

- 图片资源

    涉及 Loader 有：url-loader。

    url-loader 通常需要在其后接一个查询字符串 limit，用于限制打包图片的大小，当图片大小小于限制时会自动转成 base64 码引用，常用8192作为标准值。

- 字体资源

    涉及 Loader 有：file-loader。
