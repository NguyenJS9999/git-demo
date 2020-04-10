var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodemyK3', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Bạn đã kết nối thành công data")
});

module.exports = mongoose;
