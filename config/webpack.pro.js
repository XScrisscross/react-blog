// node
const path = require('path')

// webpack
const webpack = require('webpack')

// third
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  stats: 'errors-only',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: undefined,
          parse: {},
          compress: {
            warnings: false,
            drop_console: true,
            pure_funcs: ['console.log']
          },
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "vendor",
          filename: 'vendor/[name].[hash:8].vendor.min.js',
          chunks: "all",
          minChunks: 2,
          priority: 10,
        }
      }
    }
  },
  entry: require('./webpack.base').entry,
  output: require('./webpack.base').output,
  resolve: require('./webpack.base').resolve,
  module: require('./webpack.base').rules,
  plugins: [
    ...require('./webpack.base').plugins,
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ]
}