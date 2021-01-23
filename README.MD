### 1. 说明

- `blog-path`: < https://xscrisscross.vercel.app >
- `blog-source`: < https://github.com/XScrisscross/react-app-blog >
- `publish-path`: < https://github.com/XScrisscross/xscrisscross.vercel >

### 2. 维护

- v1.21

1. `webpack`配置打包以及启动环境,`react`配置基本目录,引入基本依赖
2. 引入 `markdown`,`redux`,`router`,搭建 `blog` 雏形,测试 `blog` 部署 `vercel`

- v1.23

1. `app` 结构优化,分 `test`(测试用模块),`app`(`blog` 发布用)
2. `env` 封装,一些基本的环境配置,将一些基础信息挂载到 `window`
3. `apis` 封装不同请求及链接,分模块自动引入命名 `apis`(按规则命名文件/文件夹即可),挂载到 `window`
4. `utils` 封装不同类型工具函数,分模块自动引入命名 `utils`(按规则命名文件/文件夹即可),挂载到 `window`
5. `router` 分模块自动引入整合,动态渲染路由(按规则命名文件/文件夹即可),`loadable` 懒加载,路由 `loading`,添加路由嵌套
6. 根据 `types` 自动创建 `actionCreater`,生成 `actions` 列表

- v1.24

1. 根据 `types` 自动创建 `reducers`,生成 `reducers` 列表,对应关系 `key-action-ruducer`
2. 添加处理异步请求的中间件,添加 `dispatch` 是 `log` 中间件等
3. 添加`@mdx/loader`(处理 `md` 文件流解析),添加代码块高亮主题插件(默认 `github` 同款主题)
4. `books` 动态引入,`loading` 动画,`book` 定义规则, 自定义部分 markdown 样式

- v1.25

1. 完成基本的文档查看,切换,新增编辑md文档功能,先告一段落
