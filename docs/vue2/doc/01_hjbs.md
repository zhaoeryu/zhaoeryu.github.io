# 环境部署

## 准备工作
```text
NodeJs: v16.18.0
```

如果你对以上环境不熟悉或者说没有了解过，可以参考以下教程：
- [Nodejs安装教程](https://www.runoob.com/nodejs/nodejs-install-setup.html)

## 运行系统

1. 下载源码
```bash
git clone https://gitee.com/zhaoeryu/eu-vue2.git
```

2. 安装项目依赖

进入到项目的根目录，执行以下命令：
```bash
npm i
```

5. 启动系统
```bash
npm run dev
```
当你看到以下日志时，说明系统已经启动成功了。
```text
 DONE  Compiled successfully in 7744ms                                                                                                                                9:18:24 PM

  App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://192.168.xx.xx:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

浏览器访问：http://localhost:8080  ，账号密码：admin/123123
