const path=require('path');  //node 里面路径
const webpack=require('webpack');// 引入 webpack
//html-webpack-plugin'入再内存中生成 html 页面插件
//只要是插件 都一定要 放入 plugin 节点去
//这个插件的两个作用
//1，自动在内存中根据指定页面生成一个内存的页面
//2，自动，把打包好的 bundle.js 追加到界面中去
const htmlWebpackPlugin=require('html-webpack-plugin');

//这是配置文件
module.exports={ 
//1 实现 一个自动打包的配置  打包人口 输入文件
entry:path.join(__dirname,'./src/main.js'),//人口，表示，使用webpack 打包哪一个文件
output:{ 
    path:path.join(__dirname,'./dist'),// 指定 打包好的文件，输出到那个目录里面去
    filename:'bundle.js'// 这是指定输出文件的名称
},
devServer:{
    open:true,//自动打开浏览器
    port:3000,//设置启动时候运行端口
    contentBase:'src',
    hot:true,//在配置文件中启动热更新，必须引入webpack  和 配置 plugins
},
plugins:[//配之插件的节点
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({ //创建一个 在内存中 生成的 html 页面插件
        template:path.join(__dirname,'./src/index.html'),//指定 模板界面，将来会根据指定界面的页面陆军，去生成内存中界面
        filename:'index.html'//指定生成的页面名称
    })
]

}

//当我们 在 控制台 ，直接输出 webpack 命令执行的时候，webpack做了以下那几步
//1，首先，webpack 发现，我们并没有通过命令的形式，给他指定人口和出口
//2，webpack 就会去 项目的 根目录，查找一个叫做 'webpack.config.js'的配置文件 
//3，当找到配置文件后，webpack会去解析执行这个 配置文件，当解析玩配置文件后，就得到了 配置文件中
//导出的配置对象
//4，当webpack 拿到 配置对象以后，就拿到了 配置对象中，指定的 人口和出口，然后进行打包构建

//实现自动编译的功能 webpack-dev-server  这个工具，来实现自动打包编译的功能 
//   1 .运行 npm i wenpacl-dev-server -D 把这个工具安装到项目本地开发依赖
//   2，安装完毕以后，这个工具的用法，和webpack 命令的用法，完全一样
//   3, 由于，我们在项目中，本地安装的 webpack-dev-server ,所以，无法把他当作 脚本命令，在powershell
// 终端直接运行；(只有那些安装到全局 -g 的工具 ，才能 在终端正常执行)
// 4 注意:webpack-dev-server 这个工具，如果想要正常运行，必须在项目本地安装 webpack
// 5 webpack-dev-server 帮我们打包生成 budle.js 文件，并没有存放到 实际的 物理磁盘上，而是
//直接托管到了 电脑存在中，所以，我们在 项目根本目录中，根本找不到 打包好的budle.js

