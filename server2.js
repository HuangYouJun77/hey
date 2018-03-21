//引入http  querystring 模块

var http = require("http");

var query = require("querystring");


//创建服务器

http.createServer(function(req,res){

var body = ""
//获取请求信息
 req.on("data",function(chunk){
  //{name:"张胜男",mima:pass,mima2:pass2}
      body += chunk;

 })


//获取请求信息完成
req.on("end",function(){

      //解析数据   
      //{name:"张胜男",mima:pass,mima2:pass2}

      var data = query.parse(body);
      
      //判断是否可以登录
      //1.用户名 密码 确认密码不能为空 
      //2.密码确认密码一致
       
       res.setHeader("Access-Control-Allow-Origin","*")
      if(data.name && data.mima && data.mima2){

      	     if(data.mima == data.mima2){

      	     	//满足条件 可以登录
              
      	     	res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
               //服务器返回登录结果给前端页面
      	     	res.end(data.name + "登录成功！")
      	     }else{
      	     	res.end("密码必须一致")
      	     }
     
      }else{

      	  res.end("不能为空")
      }





})



}).listen(8085)