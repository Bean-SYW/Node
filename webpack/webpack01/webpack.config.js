const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    //构建模式 none,development,production
    mode:'production',
    //上下文，不常用配置，默认指向根目录
    //content: process.cwd(),

    //入口,支持3种值，字符串，数组，对象
    // entry:'./src/index.js',
    // entry:['./src/index.js','./src/other.js'],
    entry:{
        index:'./src/index.js',
        other:'./src/other.js'
    },
    //出口
    output:{
        //构建资源文件目录，必须相对路径
        path:path.resolve(__dirname,'./dist'),
        //构建资源文件名称
        filename:'[name]-[hash:6].js'

        //占位符[]
        //name
        //hash(整个项目hash值，最多20位，常用6位，代码内容不发生变化，hash值不改变)
        //chunkhash(不同入口entry进行依赖解析，构建对应的chunk，生成对应的hash,组成entry的模块没有内容改变,hash不变)
    },
    module:{
        //webpack默认只支持js,json文件后缀
        //设定转换文件规则
        rules:[
            {
                //.css结尾的文件
                test: /\.css$/,
                //loader 模块转换,执行顺序从后往前
                //先执行css-loader，把css的内容加入到js模块中去,css in js方式
                //后执行style-loader,从js中提取css的loader，在html中创建style标签,把css的内容放在标签中
                use:['style-loader','css-loader']
            }
        ]
    },
    //插件
    plugins:[new CleanWebpackPlugin()]
}