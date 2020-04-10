var express = require("express");
var app = express();
var userRouter = require("./router/UserRouter.js")
var bodyParser = require("body-parser") // hỗ trợ kết nối clien và sever

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/project01', userRouter)


app.listen("3000", function() {
    console.log("Đã kết nối thành công sever")
})

