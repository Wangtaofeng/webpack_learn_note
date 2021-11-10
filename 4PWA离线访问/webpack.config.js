const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入workbox-webpack-plugin(在插件中使用), 该插件生成一个servicework配置文件
// 再通过入口文件对配置文件的读取设置, 就可以达到离线访问了
const workboxWebpackPlugin = require('workbox-webpack-plugin')


const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  'postcss-loader'
];
module.exports = {
  entry: './src/js/index.js',
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
    }),
    // 使用workboxWebpackPlugin插件, 生成service配置文件
    // 构建方法: 这里配置生成serviceworker文件, js中注册
    // 随后打包, 将打包目录整体部署到服务器上即可
    new workboxWebpackPlugin.GenerateSW({
      // 删除旧的service缓存
      clientsClaim: true,
      // 快速启动
      skipWaiting: true
    })
  ],
  mode: 'production',
}