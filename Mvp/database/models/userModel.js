const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  email: String,
  password: String,
  games: Array
});

const User = mongoose.model('Users', UserSchema);

module.exports = User;