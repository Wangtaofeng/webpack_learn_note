// 这个js文件用来配置webpack的
// 由于构建工具是基于nodejs的，因此采用的模块化标准为commonJs
// path模块中的resolve方法可以拼接绝对路径

const { resolve } = require('path')
module.exports = {
    // 入口文件
    entry: './src/js/index.js',
    //输出配置
    output: {
        filename: 'built.js',
        // 输出路径，一般用决定路径，这里使用path模块的resolve方法拼接一下
        path: resolve(__dirname, 'build')
    },
    // loder的配置，这里配置一些加载不是js文件的方法
    module: {
        // rules是一个数组，里面存放的是不同的匹配模式和对应的loder
        rules: [
            {
                // 匹配模式
                test: /\.css$/,
                // 使用的loder
                // loder里使用的顺序是从下向上
                use: [
                    // 创建style标签,将js中的样式添加到style标签中
                    'style-loader',
                    // 将css文件变成commonjs模块加载到js中,内容样式字符串
                    'css-loader'
                ]

            }
        ]
    },
    // 插件
    plugins: [

    ],
    // 模式
    mode: 'development'// 开发模式
    // mode: 'production' // 生产模式

}
