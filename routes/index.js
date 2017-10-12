var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express 入门教程',
    content:'路由是指如何定义应用的端点（URIs）以及如何响应客户端的请求。\
    路由是由一个 URI、HTTP 请求（GET、POST等）和若干个句柄组成，\
    它的结构如下： app.METHOD(path, [callback...], callback)，\
    app 是 express 对象的一个实例， METHOD 是一个 HTTP 请求方法，\
    path 是服务器上的路径， callback 是当路由匹配时要执行的函数。'
   });
});

// 使用正则表达式的路由路径：
router.get(/index(.html)?/, function (req, res) {
  res.send('welcome to the index.html');
});

module.exports = router;
