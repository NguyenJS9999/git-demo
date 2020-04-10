var mongoose = require ("../config/dbConnect.js");

var Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
})
var UserModel = mongoose.model("project1", UserSchema)
module.exports = UserModel; 