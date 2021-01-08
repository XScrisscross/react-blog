#### 1. 描述

- blog-path: https://xscrisscross.vercel.app
- blog-source: https://github.com/XScrisscross/react-app-blog
- publish-path: https://github.com/XScrisscross/xscrisscross.vercel

#### 2. 模块

- `config`, 打包的配置
- `webapp`, 打包过后的目录
- `public`, 打包模板
- `app`,
  - `actions`, 指令
  - `apis`, 静态资源
  - `assets`, 静态资源
  - `cpts`, 公共的组件
  - `env`, 环境配置
  - `reducers`, 操作改变`store`的方法
  - `redux`, `redux`树
  - `router`, 路由的配置
  - `test`, 测试
  - `utils`, 公共方法
  - `views`, 视图
- `main.js`, 入口

#### 3. 日志

#### 4. 维护

- v1.0

1. `webpack`配置打包以及启动环境,`react`配置基本目录,引入基本依赖

- v1.22

1. 引入 markdown,redux,router,搭建 blog 雏形,测试 blog 部署 vercel

