const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  'postcss-loader'
];
module.exports = {
  // entry入口, 如果有多个, 则为多个链条开始打包, 生成多个文件
  // 但是一般为单页面应用
  entry: './src/js/index.js',
  // entry: {
  //   // 这里的key即index. print, 是下面js打包后的一个[name]值
  //   // 可以写上用于命名区分不同的文件
  //   index: './src/js/index.js',
  //   print: './src/js/print.js'
  // },
  output: {
    filename: 'js/[name].[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [...commonCssLoader]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/built.[contenthash:10].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  // 该配置有两个作用
  // 1. 将node_modules中的代码单独打包成一个chunk, 避免引入了包的js代码体积太庞大
  // 2. 不会重复打包, 即如果在多入口情况下, 不同入口都引入了同一文件, 不会重复打包该文件
  //    当多个文件公用某些文件时, 如果不设置, 那么该文件会被重复打包进不同的chunk中
  //     只对第三方包生效
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'production',
}