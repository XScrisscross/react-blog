// nodejs
const path = require('path')

// webpack
const webpack = require('webpack')

// third
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const marked = require('marked')
const renderer = new marked.Renderer()

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
    '~apis': path.resolve(__dirname, '../app/apis'),
    '~assets': path.resolve(__dirname, '../app/assets'),
    '~components': path.resolve(__dirname, '../app/components'),
    '~env': path.resolve(__dirname, '../app/env'),
    '~reducers': path.resolve(__dirname, '../app/reducers'),
    '~router': path.resolve(__dirname, '../app/router'),
    '~test': path.resolve(__dirname, '../app/test'),
    '~utils': path.resolve(__dirname, '../app/utils'),
    '~views': path.resolve(__dirname, '../app/views'),
  },
  extensions: ['.js', '.json', '.jsx', 'css', 'less', 'scss'],
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
          options: { publicPath: './css' },
        },
        'css-loader',
        'less-loader',
      ],
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: { publicPath: './css' },
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
      test: /\.(md|MD)$/,
      use: [
        {
          loader: 'html-loader',
        },
        {
          loader: 'markdown-loader',
          options: {
            pedantic: true,
            renderer,
          },
        },
      ],
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: { limit: 8192 },
        },
      ],
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader'],
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
