//导入CSS文件
require("./css/style.css");

//动态导入图片
var img = document.createElement("img");
img.setAttribute("src", require("./images/loading.gif"));
document.body.appendChild(img);
