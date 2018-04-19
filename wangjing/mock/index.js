var Mock=require("mockjs")
var Random = Mock.Random
module.exports=function(app){
  app.get("/api",function(req,res,next){
    var data = Mock.mock({
          // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
          'list|1-100': [{
              // 属性 id 是一个自增数，起始值为 1，每次增 1
              'id|+1': 1,
              'title':'@ctitle',
              'price':'@integer(1000,2000)',
              'img':"@image('100')",
              "addr":'@city'
          }]
      })
    res.send(data)
  })
}
