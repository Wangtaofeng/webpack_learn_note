/* eslint-disable */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './js/index.js',
  output: {
    // 生成的文件名
    filename: 'js/built.js',
    // 文件所在的目录
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        exclude: /\.(html|css|js|jpg|png)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          // 指定相对于path下的子路径
          outputPath: 'other'
        }
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
        options: {
          name: '[hash:10].[ext]',
          limit: 8 * 1024,
          esModule: false,
          outputPath: 'img'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          esModule: false
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  devServer: {
    // gzip压缩
    compress: true,
    port: 3000,
    open: true
  },
  mode: 'development'

}