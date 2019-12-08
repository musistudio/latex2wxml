## 微信小程序渲染Latex方案总结

#### 1. 使用MathJax-node返回图片渲染

优点：简单、方便。

缺点：需要服务器介入、样式不可控制，文本居中对齐。图片大小没办法得到很好的控制

<img src="/Volumes/media/projects/node/latex/latex2png.jpg" alt="latex2png" style="zoom:50%;" />



#### 2. 使用MathJax+Webview+HTML渲染

优点：简单、样式可控、无需服务器介入

缺点：与小程序交互不变，不能使用小程序相关API

<img src="/Volumes/media/projects/node/latex/latex2-webview.jpg" alt="latex2-webview" style="zoom:50%;" />



#### 3. 使用MathJax-node返回HTML渲染

优点：样式可控、可以使用小程序相关API

缺点：需要服务器介入并且需要前后端配合。

<img src="/Volumes/media/projects/node/latex/latex2wxml.jpg" alt="latex2wxml" style="zoom:50%;" />