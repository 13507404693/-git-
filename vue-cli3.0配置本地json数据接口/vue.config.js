const goods=require('./data/goods.json');
const seller=require('./data/seller.json');

//module.exports 文件导出  小提示:只要这个文件的东西被改变，就需要重启整个项目
module.exports={ 
baseUrl:"/",//根路径
outputDir:'distTwo',//构建输出目录
assetsDir:'assets',//静态资源目录?(js,css,img,fonts)
lintOnSave:false,//是否开启eslit保存检测，有效值fals || true 检测语法的严格性
devServer: {  //开发配置 
    open:true,//是否自动打开项目  false || true
    host:'localhost',//指定域名
    port:8081,//端口号
    https:false,// 把访问域名变成 https  两个条件 false || true
    hotOnly: false,//热更新
    proxy:{
        //跨域配置
        '/api':{
            target:"http://localhost:3000", //配置端口名字
            ws:true,//是否可以使用
            changOrigin:true,
            pathRewrite:{//名字太长，简化名字
                '^/pai':''
            }
            
        }
    },
    before(app){//访问外部json 文件的配置  外部也可以访问的一个固定的数据接口
        //http://localhost:8081  goods.json
        app.get('/api/goods', function(req, res) {
          res.json(goods);
        });

        //http://localhost:8081  goods.json
        app.get('/api/seller', function (req, res) {
            res.json(seller);
        });

      }


}
}