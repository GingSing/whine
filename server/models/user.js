var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema ({
  username: {type: String, required: true, trim:true },
  password: { type: String, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true }
})

var User = mongoose.model('User', UserSchema);

module.exports = User;
