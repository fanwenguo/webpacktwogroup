var Mock = require("mockjs")
var Random = Mock.Random
module.exports = function(app) {
    app.get("/api", function(req, res, next) {
        var arr = [];
        for (var i = 1; i <= 20; i++) {
            arr.push({
                'id': i,
                'name': Random.cname(),
                "paragraph": Random.cparagraph(1, 2),
                "addr": Random.city(),
                'img': Random.image('100x100')
            })
        }
        res.send(arr)
    })
}