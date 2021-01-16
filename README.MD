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
  - `apis`, 请求封装
  - `assets`, 静态资源
  - `books`, blog 资源
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

- v1.23

1. app 结构优化,分 test(测试用模块),app(blog 发布用)
2. env 封装,一些基本的环境配置,将一些基础信息挂载到 window
3. apis 封装不同请求及链接,分模块自动引入命名 apis(按规则命名文件/文件夹即可),挂载到 window
4. utils 封装不同类型工具函数,分模块自动引入命名 utils(按规则命名文件/文件夹即可),挂载到 window
5. router 分模块自动引入整合,动态渲染路由(按规则命名文件/文件夹即可),loadable 懒加载,路由 loading,添加路由嵌套
6. 根据types自动创建actionCreater,生成actions列表

route 
组件异步加载



react 结构封装
book module 完成
现存 blog 发布
