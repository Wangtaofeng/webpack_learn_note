const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  'postcss-loader'
];
module.exports = {
  entry: './src/js/index.js',
  output: {
    // 当服务端开始强缓存的时候, 只要文件名字不变化, 那么就不会对比文件内容, 会直接走缓存
    // 但是这种情况下, 文件内容发生变化的时候, 不能进行及时更新
    // 此时可以利用hash值让每次更改后的hash变化来达到不走缓存的效果
    // hash: webpack每次打包都会生成一个唯一的hash值, css, js, 图片等文件可以使用该值作为名称达到每次webpack打包后都更新为新的资源
    //     但是缺点就是其他没有更新的资源也会被重新命名重新加载, 造成不必要的资源浪费, 不可取
    // chunkhash: 从index.js引入的各种文件, 来自同一条链条, 同一条链的chunkhash相同, 同上述hash一样也不可取
    // contenthas: 根据文件内容生成hash值, 只要文件内容不同, hash就不同. 打包前后只要文件内容不变, hash相同, 会走缓存, 不用重新加载, 符合要求
    filename: 'js/built.[contenthash:10].js',
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
  mode: 'development',
  devtool: 'eval-source-map',
}