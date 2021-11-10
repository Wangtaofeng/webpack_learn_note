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
    filename: 'js/built.[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [...commonCssLoader]
      },
      {
        // 当js代码用babel处理兼容性且本身代码就比较多的情况下可以使用thread-loader开启多线程打包
        // thread-loader本身启动进程就需要耗费时间, 所以当js代码不多时就不要开启, 否则还可能会延长打包时间

        test: '/\.js$/',
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              // 默认是cpu核 - 1, 可以通过这里更改开启几个进程
              works: 2
            }
          },
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: {
                      version: 3
                    },
                    targets: {
                      chrome: '60'
                    }
                  }
                ]
              ]
            }
          }
        ]

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
  mode: 'production',
}