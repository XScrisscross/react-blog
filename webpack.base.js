const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './app/index'),
  context: __dirname,
  output: {
    path: path.resolve(__dirname, 'dist/'), //打包文件的输出路径
    publicPath: '/dist/',
    filename: 'bundle.js',
    filename: 'js/[name].[hash:8].bundle.js',
    chunkFilename: 'js/[name].[hash:8].bundle.js',
    library: 'MyLibrary',
    libraryTarget: 'umd'
  },
  resolve: {
    // alias: {
    //   '~app': path.resolve(__dirname, '../app/api'),
    //   '~assets': path.resolve(__dirname, '../app/assets'),
    //   '~utils': path.resolve(__dirname, '../app/utils'),
    // },
    extensions: ['.js', '.json', '.jsx', 'css', 'less', 'scss'],
    modules: [path.resolve(__dirname, './app/components'), 'node_modules'] // 优先导入模块
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, './app')],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         publicPath: './css'
      //       },
      //     },
      //     'css-loader',
      //   ]
      // },
      // {
      //   test: /\.less$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         publicPath: './css'
      //       },
      //     },
      //     'css-loader',
      //     'less-loader',
      //   ]
      // },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         publicPath: './css'
      //       },
      //     },
      //     'css-loader',
      //     'scss-loader',
      //   ]
      // },
      // {
      //   test: /\.html$/,
      //   use: [{
      //     loader: 'html-loader',
      //     options: {
      //       minimize: true
      //     }
      //   }],
      // },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       limit: 8192
      //     }
      //   }]
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // filename: 'index.html',
      // template: path.resolve(__dirname, './dist/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:6].css',
      chunkFilename: '[id].[hash:6].css',
    }),
    new CleanWebpackPlugin()
  ],
}