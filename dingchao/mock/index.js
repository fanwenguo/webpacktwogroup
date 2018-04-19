var Mock=require("mockjs")
var Random = Mock.Random
module.exports=function(app){
  app.get("/api",function(req,res,next){
      var arr = [];
      for(var i=1;i<=100;i++){
          arr.push({
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id': i,
            'name':Random.cname(),
            "addr":Random.province(),
            "img":Random.image('100','#ff0','Hi!VUE'),
            "text":Random.ctitle(10,15),
            "price":Random.integer(100,1000)
        })
      }
    res.send(arr)
  })
}
