# 环境部署

## 准备工作
```text
JDK 1.8.x
Maven 3.8.x
Mysql 5.7.x
Redis 6.2.x
```

如果你对以上环境不熟悉或者说没有了解过，可以参考以下教程：
- [JDK安装教程](https://www.runoob.com/java/java-environment-setup.html)
- [Maven安装教程](https://www.runoob.com/maven/maven-setup.html)
- [Mysql安装教程](https://www.runoob.com/mysql/mysql-install.html)
- [Redis安装教程](https://www.runoob.com/redis/redis-install.html)

## 运行系统

1. 下载源码
```bash
git clone https://gitee.com/zhaoeryu/eu-backend.git
```

2. 导入数据库

进入到项目的`sql/`目录下，导入`eu.sql`文件到你的数据库中。

3. 修改配置文件

如果你的数据库账号密码不是`root`和`123123`，请修改`application.yml`文件中的数据库配置。

如果你的Redis密码不是`123123`，请修改`application.yml`文件中的Redis配置。

![application.png](/application.png)

4. 编译项目

进入到项目的根目录，执行以下命令：
```bash
mvn clean package
```
然后在`eu-admin/target/`目录下会生成一个`eu-admin.jar`文件。

5. 启动系统
```bash
java -jar eu-admin/target/eu-admin.jar
```
当你看到以下日志时，说明系统已经启动成功了。
```text
===============================
服务启动成功
===============================
```
