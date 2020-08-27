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
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "chunk",
          priority: -10,
          enforce: true
        },
        common: {
          name: "vendor",
          priority: -20,
          filename: 'vendor/[name].[hash:8].vendor.min.js',
          chunks: "all",
          minChunks: 2
        }
      },
      chunks: "all",
      minSize: 40000
    }
  },
  entry: require('./webpack.base').entry,
  output: require('./webpack.base').output,
  resolve: require('./webpack.base').resolve,
  module: require('./webpack.base').rules,
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '../webapp')]
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new BundleAnalyzerPlugin({
      analyzerHost: '127.0.0.1',
      analyzerPort: 3333,
      openAnalyzer: false
    }),
    ...require('./webpack.base').plugins
  ]
}