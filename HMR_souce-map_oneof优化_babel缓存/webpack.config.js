/* eslint-disable */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
process.env.NODE_ENV = 'production'

module.exports = {
  // 增加html入口解决HMR开启后更改html页面不更新问题
  entry: ['./src/js/index.js', './src/index.html'],
  output: {
    // 生成的文件名
    filename: 'js/built[contenthash].js',
    // 文件所在的目录
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // 不止匹配一次的放在外面, 但是里面也可以放一个
      {
        // 使用oneOf让每个test匹配即下面的每一个对象只命中一次就停止, 因为下面只有一个处理, 匹配到了不停止继续匹配对性能浪费
        oneOf: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.html$/,
            loader: 'html-loader'
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
              presets: [
                [
                  // 需要这个插件来按照corejs规则来编译
                  'env',
                  {
                    // 按需引入
                    useBuildIns: 'usage',
                    corejs: { version: 3 },
                    targets: {
                      chrome: '60',
                      firefox: '50'
                    }
                  }
                ]
              ],
              // 开始babel缓存, 有时候js改了一部分但是缓存的兼容性处理方法很多时候不用改
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    // g-zip压缩
    compress: true,
    port: 3000,
    // 自动打开浏览器
    open: true,
    // 使用HMR热模块替换
    hot: true
  },
  /*
  [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map

  source-map：外部
    错误代码准确信息 和 源代码的错误位置
  inline-source-map：内联
    只生成一个内联source-map
    错误代码准确信息 和 源代码的错误位置
  hidden-source-map：外部
    错误代码错误原因，但是没有错误位置
    不能追踪源代码错误，只能提示到构建后代码的错误位置
  eval-source-map：内联
    每一个文件都生成对应的source-map，都在eval
    错误代码准确信息 和 源代码的错误位置
  nosources-source-map：外部
    错误代码准确信息, 但是没有任何源代码信息
  cheap-source-map：外部
    错误代码准确信息 和 源代码的错误位置 
    只能精确的行
  cheap-module-source-map：外部
    错误代码准确信息 和 源代码的错误位置 
    module会将loader的source map加入

  内联 和 外部的区别：1. 外部生成了文件，内联没有 2. 内联构建速度更快

  开发环境：速度快，调试更友好
    速度快(eval>inline>cheap>...)
      eval-cheap-souce-map
      eval-source-map
    调试更友好  
      souce-map
      cheap-module-souce-map
      cheap-souce-map

    --> eval-source-map

  生产环境：源代码要不要隐藏? 调试要不要更友好
    内联会让代码体积变大，所以在生产环境不用内联
    nosources-source-map 全部隐藏
    hidden-source-map 只隐藏源代码，会提示构建后代码错误信息

    --> source-map / cheap-module-souce-map
*/
  devtool: 'source-map'

}