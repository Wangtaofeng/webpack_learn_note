// 该文件运行一次是为了打包那些处理过的第三方库, 例如react或者jquery这种自己不会修改的代码
// 启动指令为webapck --config 该文件名
// 和webpack里打包设置相似但不完全一致, 比如下面的文件入口属性值只能是数组
const { resolve } = require('path')
const webpack = require('webpack')
module.exports = {
  entry: {
    jquery: ['jquery']
  },
  output: {
    // 不能使用contenthash或者其他hash, 不然动态添加到html中引入不知道文件名是什么
    filename: '[name].js',
    // 注意不能也生成到了build打包后的文件夹了, 那里每次打包都要重新生成的
    // 要独立于webpack打包后的文件夹
    path: resolve(__dirname, 'dll'),
    // 打包后向外暴露一个对象, 注意不是文件,不能带后缀, 即export [name]
    library: '[name]_[hash]'
  },
  plugins: [
    // 借助webpack的DllPlugin生成一个映射, 源文件打包后根据这个映射找到提前已经打包好的文件
    // 生成一个manifest.json
    new webpack.DllPlugin({
      // 映射要找的暴露的内容
      name: '[name]_[hash]',
      // 生成的映射文件名, 在源文件打包时使用该映射即可
      path: resolve(__dirname, 'dll/manifest.json')
    })
  ],
  mode: 'production',
}