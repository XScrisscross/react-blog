### 地址

- `blog-publish`: < https://xs-demo-pro.vercel.app/#/app/book >
- `blog-source`: < https://github.com/XScrisscross/react-app-blog >

### 思路

- 开始是想做一个纯前端的静态 `blog` 小站作为学习或者管理记录一些日志,不写后台,也不买服务器,可以自己定义界面
- 类似与生成组件文档的`react-docgen`,`vuepress`,使用`@mdx/loader`,`file-saver`可以将一些 `md` 文档配合 `react` 直接构建成一个静态网站
- 在静态页面提供生成 `md` 文档的入口,定义命名规则,`md`放入指定的文件夹后,在`react`动态引入所有文件,根据命名规则将文件名解析并且分类展示

### webpack 配置

webpack.base.js

```js
// nodejs
const path = require('path')

// webpack
const webpack = require('webpack')

// third
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// entry
const entry = path.resolve(__dirname, '../app/main')

// output
const output = {
  path: path.resolve(__dirname, '../webapp'), //打包文件的输出路径
  publicPath: '',
  filename: 'js/[name].[hash:8].bundle.js',
  chunkFilename: 'js/[name].[hash:8].bundle.js',
}

// resolve
const resolve = {
  alias: {
    '~actions': path.resolve(__dirname, '../app/actions'),
    '~apis': path.resolve(__dirname, '../app/apis'),
    '~assets': path.resolve(__dirname, '../app/assets'),
    '~books': path.resolve(__dirname, '../static/books/index.js'),
    '~contain': path.resolve(__dirname, '../app/cpts/contain'),
    '~uiview': path.resolve(__dirname, '../app/cpts/uiview'),
    '~env': path.resolve(__dirname, '../app/env'),
    '~reducer': path.resolve(__dirname, '../app/reducer'),
    '~redux': path.resolve(__dirname, '../app/redux'),
    '~router': path.resolve(__dirname, '../app/router'),
    '~test': path.resolve(__dirname, '../app/test'),
    '~utils': path.resolve(__dirname, '../app/utils'),
    '~views': path.resolve(__dirname, '../app/views'),
  },
  extensions: ['.js', '.json', '.jsx', 'css', 'less', 'scss', 'md', 'MD'],
  modules: [path.resolve(__dirname, '../app/components'), 'node_modules'], // 优先导入模块
}

// rules
const rules = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      include: [path.resolve(__dirname, '../app')],
      loader: 'babel-loader',
      options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: { publicPath: './css' },
        },
        'css-loader',
      ],
    },
    {
      test: /\.less$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: { publicPath: '../' },
        },
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              modifyVars: { '@primary-color': '#ae976e' },
              javascriptEnabled: true,
            },
          },
        },
      ],
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: { publicPath: '../' },
        },
        'css-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
          options: { minimize: true },
        },
      ],
    },
    {
      test: /\.(md|MD)x?$/,
      use: [
        'babel-loader',
        {
          loader: '@mdx-js/loader',
          options: {},
        },
      ],
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            outputPath: 'img',
          },
        },
      ],
    },
  ],
}

// plugins
const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    path: path.resolve(__dirname, '../webapp/index.html'),
    template: path.resolve(__dirname, '../public/index.html'),
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[hash:8].bundle.css',
    chunkFilename: 'css/[name].[hash:8].bundle.css',
  }),
]

module.exports = {
  entry: entry,
  output: output,
  resolve: resolve,
  rules: rules,
  plugins: plugins,
}
```

webpack.dev.js

```js
// node
const path = require('path')

// webpack
const webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
  mode: 'development',
  stats: 'errors-only',
  devtool: 'source-map',
  entry: require('./webpack.base').entry,
  output: require('./webpack.base').output,
  resolve: require('./webpack.base').resolve,
  module: require('./webpack.base').rules,
  devServer: {
    proxy: {
      // proxy URLs to backend development server
      '/api': 'http://localhost:8888',
    },
    publicPath: '/',
    hot: true,
    port: 3000,
    open: false,
    compress: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../webapp/index.html'),
  },
  plugins: [...require('./webpack.base').plugins, new DashboardPlugin(), new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
}
```

webpack.pro.js

```js
// node
const path = require('path')

// webpack
const webpack = require('webpack')

// third
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  stats: 'errors-only',
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        extractComments: false,
        terserOptions: {
          compress: {
            warnings: false,
            drop_console: true,
            pure_funcs: ['console.log'],
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          filename: 'vendors.js',
          priority: -10,
        },
        default: {
          priority: -20,
          reuseExistingChunk: true,
          filename: 'js/common.js',
        },
      },
    },
  },
  entry: require('./webpack.base').entry,
  output: require('./webpack.base').output,
  resolve: require('./webpack.base').resolve,
  module: require('./webpack.base').rules,
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '../webapp')],
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ...require('./webpack.base').plugins,
    new BundleAnalyzerPlugin({
      analyzerHost: '127.0.0.1',
      analyzerPort: 3333,
      openAnalyzer: false,
    }),
  ],
}
```

---

- 如有问题,欢迎指出!
