var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema ({
  username: { type: String, unique: true, required: true, trim:true },
  password: { type: String, unique: true, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  datejoined: { type: Date, default: Date.now },
  comments: { type: Array },
  posts: { type: Array }
})

var User = mongoose.model('User', UserSchema);

module.exports = User;
