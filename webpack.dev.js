const path = require('path')
const webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')

const config = require('./webpack.base')

module.exports = {
  ...config,
  mode: 'development',
  devtool: 'source-map',
  target: 'web',
  stats: 'errors-only',
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    publicPath: '/',
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist/index.html'),
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    ...config.plugins,
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
}