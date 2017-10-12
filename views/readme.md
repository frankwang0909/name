
## 使用淘宝 NPM 镜像

1.使用定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:
```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

2.安装模块
```shell
cnpm install [name]
```

## 快速创建一个应用的骨架

1.安装应用生成器工具 express-generator

```shell
cnpm install express-generator -g
```

2.在当前工作目录下创建一个命名为 name 的应用。

```shell
express name
```

3.安装所有依赖包

```shell
cd name
cnpm install
```

4.启动应用（Windows 平台）

```shell
set DEBUG=name & npm start
```

在浏览器中打开 http://localhost:3000/ 网址就可以看到这个应用了

