/* eslint-disable */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 该插件的作用是将打包好的css样式从js中提取出来作为一个单独的样式表
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 兼容性处理基本写法也是固定的, 生产环境和开发环境的不同配置的兼容性
// 注意即使在package.json中写好了, 但是默认的是production环境
// 可以通过环境变量来设置不同
// 该环境变量只对css兼容性处理的那个插件有效
process.env.NODE_ENV = 'production'

// ##将css的提取和兼容性设置封装一下方便复用
const cssOption = [
  // 经过css-loader处理后的样式不能再用style-loader处理了, 需要用到提取css的插件处理
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: '../'
    }
  },
  'css-loader',
  // 兼容性处理, 需要在css-loader之前使用兼容性的loader
  // 这里配置完成之后需要在package.json中配置具体的兼容规则
  'postcss-loader'
]

// 用于压缩css代码的插件, 在plugins直接new即可
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'built')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [...cssOption]
      },
      {
        test: /\.less$/,
        use: [...cssOption, 'less-loader']
      },
      {
        test: /\.js$/,
        // 优先执行, 在兼容性和压缩之前
        enforce: 'pre',
        // 不检查node_modules中的
        exclude: /node_modules/,
        // 使用eslint-loader检查js, 设置完了之后需要设置根据什么来检查js
        // 在package.json中配置
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      // 兼容性处理
      {
        test: /\.js$/,
        // 使用babel处理兼容性问题, babel-loader用于解析
        // 规则是core.js, 插件为preset-env
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // 预设, 配置babel做什么样的兼容性处理
          presets: [
            // 这里还需要一层中括号
            [
              '@babel/preset-env',
              {
                // 按需加载
                useBuiltIns: 'usage',
                // 指定core.js版本
                corejs: {
                  version: 3
                },
                // 兼容性做到哪个版本的浏览器
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '17'
                }
              }
            ]
          ]
        }
      },
      // 和开发环境一样的处理图片文件
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          name: '[hash:10].[ext]',
          limit: 8 * 1024,
          esModule: false,
          outputPath: 'img'
        }
      },
      // 和开发环境一样的解决html中引用url的问题
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          esModule: false
        }
      },
      // 和开发环境一样的其他文件配置
      {
        exclude: /\.(html|css|js|less|png|jpg|jpeg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'other'
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // 压缩html代码只需要在该plugin中配置即可
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true
      }
    }),
    // new一个提取css样式的插件对象, 配置输出文件名
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    }),
    new OptimizeCssAssetsWebpackPlugin()
  ],
  // 这里改成production则自动压缩js代码
  mode: 'production'
}