var express = require("express");
var router = express.Router();
var UserService = require("../service/UseService.js")
var path = require("path")

// Tạo các service thêm mới , sửa, in ra toàn bộ user, in user theo id, cập nhật theo user id, xóa theo user id

// 1 thêm mới bản ghi - 
// Đăng kí tài khoản - Sign-up
router.post("/ThemMoi", function(req, res, next) {
    
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    UserService.addNew(username,password,email).then(function (data) {
        res.json(" Chúc mừng bạn đã đăng kí thành công ") // , " Chúc mừng bạn đã thêm mới bản ghi"
    
    })
})

// 2 sửa update
router.put("/CapNhapBanGhi", function (req,res, next) {
    var id = req.body.id;
    var username= req.body.username;
    var password= req.body.password;
    var email= req.body.email;

    UserService.CapNhap(id,username,password,email).then(function (data) {
        res.json(data) // " Chúc mừng bạn đã cập nhập bản ghi"
    })
})

// 3 in ra toàn bộ user
router.get("/inratatca", function(req,res,next) { 
    UserService.getAll().then(function(data) {
        res.json(data) // res.json(" in ra toàn bộ user")   
        
    })
})

// 4 in user theo id
router.get("/inUserTheoId", function (req,res,next) {
    var id = req.body.id;

    UserService.TimUserTheoId(id).then(function (data) {
        res.json(data) // " in user theo id "
    })
})

// 5 cập nhật theo user id
router.put("/CapNhapBangID", function (req,res,next) {
    var id = req.body.id;
    var username= req.body.username;
    var password= req.body.password;
    var email= req.body.email;

    UserService.CapNhapTheoID(id,username,password,email).then(function (data) {
        res.json(" cập nhật theo user id ") // " cập nhật theo user id ")
    })
})

// 6 xóa theo user id
router.delete("/XoaUserTheoId", function(req,res,next) {
    var id = req.body.id;
    UserService.XoaUserID(id).then(function(data) 
    {
        res.json("  Đã xóa bản ghi theo ID rồi ")
    })
})

// Đăng kí ở trên đầu
// lOGIN  - Đăng nhập 
router.post("/DangNhap", 
    function (req,res,next) {
        
        var username = req.body.username;
        var password = req.body.password;
        console.log(username,password)

        UserService.DangNhapVao( username, password ).then (  function (data) { 
            if (data.length < 1) { 
                // return res.json("  Sai mật khẩu hoặc tài khoản ")
                next()
            }else {
                return res.json( " Đúng MK và TKhoan " ) 
                // next() // chỉ next hoặc return
                // res.redirect("/HomeEdit")
            }

            
        })
} )

router.get("/DangNhap", function (req,res,next) {
    res.sendFile(path.join(__dirname, "../view/DangNhap.html"))
})


// btvn và router kết nối vs html - Đăng kí mới
router.get("/ThemMoi", function (req,res,next) {
    res.sendFile(path.join(__dirname,"../view/DangKi.html"))
})

// router api home
router.get("/HomeEdit", function (req,res,next) {
    res.sendFile(path.join(__dirname, "../view/edit.html") )
})

// router.get("/HomeEdit", function (req,res,next))
module.exports = router;