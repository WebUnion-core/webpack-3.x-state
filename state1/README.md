
## 介绍 ##

阶段一是构建一个可以正常启动的 webpack 框架，webpack.config.js 中仅配置 entry 和 out，在 entry 中写入的 JavaScript 代码打包导出到 dist 目录下的 index.js 文件中，如果不存在 dist 目录，不必手动创建，webpack 会自动创建。
