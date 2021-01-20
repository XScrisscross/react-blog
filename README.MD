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
6. 根据 types 自动创建 actionCreater,生成 actions 列表

- v1.24

1. 根据 types 自动创建 reducers,生成 reducers 列表,对应关系 key-action-ruducer
2. 添加处理异步请求的中间件,添加dispatch是log中间件等
3. 添加@mdx/loader(处理md文件流解析),添加代码块高亮主题插件(默认github同款主题)

book 展示 fotter 完成
现存 blog 发布
