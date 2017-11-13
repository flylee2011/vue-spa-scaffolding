/**
 * @fileoverview 应用启动入口文件，运行构建环境
 * @author liyifei
 * @date 2017/10
 */

const express = require('express');
const app = express();

let port = 8002;
let staticDir = './build/';

// 路由
// 静态资源
app.use('/', express.static(staticDir));

app.listen(port, function() {
    console.log('Web running on Production... Open http://localhost:' + port);
});
