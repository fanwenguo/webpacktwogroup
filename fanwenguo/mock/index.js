var Mock = require("mockjs");
var Random = Mock.Random;
module.exports = function(app) {
    app.get("/api", function(req, res, next) {
        var data = Mock.mock({
            'list|1-100': [{
                'id|+1': 1,
                'name': '@cname',
                "addr": '@city',
                "img": "@image('100','#fb0a2a')",
                "price": "@integer(10,100)",
                "infomation": '@cparagraph(1,2)'
            }]
        })
        res.send(data)
    })
}