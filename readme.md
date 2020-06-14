## 驾驶舱

### 项目说明

* 这里要改一下 

### 开发与调试

* 先安装脚手架 `npm --registry=http://registry.cnpm.cspiretech.com install @cspire/cbd-cli -g`
* 运行 `cbd install` 安装依赖
* 运行 `cbd dev`

### 目录结构

```
.
├── index.js ----------------------  npm入口文件，新增组件时需要在这里添加
├── dist --------------------------  打包代码
├── public ------------------------  页面的入口
└── src ---------------------------  源码目录
    ├── assets --------------------  静态资源目录
    ├── components ----------------  项目内公共组件目录
    ├── env -----------------------  环境相关的设置
    ├── layouts -------------------  布局相关组件目录
    ├── services ------------------  接口相关代码目录
    ├── utils ---------------------  工具代码目录
    ├── pages ---------------------  页面目录
        ├── hello -----------------  具体页面
        ├── hello.js --------------  逻辑代码
        ├── hello.styl ------------  css文件
```

### 打包

* 运行 `cbd build` 来打包

### 配置env/config.js

* env 项目当前的运行环境，如：'development'
* theme antd的皮肤配置信息
* proxy 项目本地代理配置，详情同webpack-dev-server的配置
* vendors 一个数组，可以定义哪些包打到vendors文件里。默认值：`['react', 'react-dom', 'moment', 'lodash', 'antd', 'antd/dist/antd.less', 'axios']`
* 其他可以自定义配置

