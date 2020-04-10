var UserModel = require("../model/UserModel.js")

// 1 Thêm mới bản ghi
function addNew(username,password,email){
    return UserModel.create({
        username: username,
        password: password,
        email:email,
    })
}

// 2 sửa - update
// 5e8abced87263f5ca0d475ab
function CapNhap(id,username,password,email,) {
    return UserModel.update(
    
    {
        _id: id,
    },    
    {
        username: username,
        password: password,
        email: email,

    }
)
}


// 3 In ra toàn bộ user
function getAll(){
    return UserModel.find()
}

// 4 in user theo id 
// nguyen7 5e8b492e4f619b4094f955d5
function TimUserTheoId(id) {
    return UserModel.find(
        {
        _id: id
        }
 
)
}


// 5 cập nhật theo user id
function CapNhapTheoID(id,username,password,email) {
    return UserModel.update({
       _id: id 
    },{
        username: username,
        password: password,
        email: email,
    }
)
}

// 6 xóa theo user id
function XoaUserID(id) {
    return UserModel.deleteOne(
        { _id: id }
    )
}

// LOGIN
function DangNhapVao ( username, password ) {
    return UserModel.find( {
        username: username,
        password : password,
    } )
}

// Đăng kí là function addNew  ./ThemMoi ở trên

module.exports = {
    addNew:addNew,
    CapNhap:CapNhap,
    getAll: getAll,
    TimUserTheoId:TimUserTheoId,
    CapNhapTheoID:CapNhapTheoID,
    XoaUserID:XoaUserID,
    DangNhapVao:DangNhapVao,
};