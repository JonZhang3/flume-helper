### Flume-Helper
帮助快速构建 Flume 配置文件，简单易操作

包含官网提供的大部分 Sources、Sinks、Channels 插件

##### 构建
```shell script
## 打包前端文件
cd view && npm run build

## 打包
mvn clean package -f pom.xml
```

##### 功能说明：

1. 查看已添加的配置项
![list_config](https://jonzhang-3.gitee.io/pics/flume_helper/list_config.png)

2. 新增配置
![new_config](https://jonzhang-3.gitee.io/pics/flume_helper/new_config.png)

3. 查看配置
![view_config](https://jonzhang-3.gitee.io/pics/flume_helper/view_config.png)
