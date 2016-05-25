import mongoose from 'mongoose'
//import bcrypt from 'bcrypt-nodejs'
let Schema = mongoose.Schema
import passportLocalMongoose from 'passport-local-mongoose'

let User = new Schema({
  username: { type: String, unique: true },
  password: String,
  email: String,
  displayName: String,
  userType: String,
  phoneNumber: String
})

User.plugin(passportLocalMongoose)
// User.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// // checking if password is valid
// User.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.local.password);
// };

module.exports = mongoose.model('User', User)
