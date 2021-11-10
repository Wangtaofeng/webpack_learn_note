const {resolve} = require('path')
// 使用html-webpack-plugin插件,可以根据指定的HTML模板在打包后的目录下生成一个index.html并且将该配置里打包生成的资源自动引入
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // 打包其他资源
            {
                // 打包其他资源不需要再单独匹配什么了,就除了html js以及其他的样式资源外,其他的都叫做其他资源
                // 这些资源需要file-loader来打包,并且不需要test匹配了,直接就exclude排除就行
                // 这里一定要注意排除什么,file-loader也会去打包图片资源,如果排除的太多就直接老老实实写test
                exclude: /\.(html|css|less|js|jpg|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    // esModule: false
                }
            },
            {
                test: /\.(jpg|png|gif)$/,
                // 处理图片资源需要用到url-loader
                // 而url-loader依赖file-loader
                // 这里只需要一个url-loader,因此可以不用写use数组而直接写loader即可
                // 忘记了之前没有注意到的事,这里的loader模块不需要引入,下载后直接使用即可
                loader: 'url-loader',
                // 还需要对loader进行一些配置
                options: {
                    // 这里的意思就是当图片过小时直接转成base64处理,也就是说直接就可以引入转化后的base64字符串,浏览器会自动解析
                    limit: 8 * 1024,
                    // 这里需要配置是因为url-loader使用的es6模块化解析,而html-loader使用的commonJS模块化解析,这里需要保持一致
                    // webpack5已经解决了这个问题,这里可以不用管解析方式了,但是html-loader还需要处理
                    esModule: false,
                    // 这里的意思是打包后的文件名只取哈希值的前10位,[ext]是保留原本拓展名
                    name: '[hash:10].[ext]'
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.html$/,
                // html-loader是专门用来引入打包后的路径的
                loader: 'html-loader',
                options: {
                    // 统一模块化解析方式
                    esModule: false
                }
            }
        ]
    },
    plugins: [
        // html-webpack-plugin
        // 作用:根据template指定目录下的模板打包一个index入口html 并且引入所有打包后的资源
        // 需要使用上述引入的模块,上面只是引入了一个构造函数,需要在这里new一个实例
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    // 配置开发服务器devServe,它可以让我们不需要手动一次次打包,会监视原目录下文件资源的变化,自动进行打包
    // npm install webpack-dev-sever, 启动为 npx webpack-dev-sever
    // 需要注意的是,自动监听打包是在内存中打包的,并不会输出到文件中
    devServer: {
        // 项目构建后的路径
        contentBase: resolve(__dirname, 'build'),
        // 为每个文件开启gzip打包方式
        compress: true,
        // 监听的端口号
        port: 3000,
        // 是否自动打开默认浏览器
        open: true 
    },
    stats: { children: false },
    mode: 'development'
}