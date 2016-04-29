import mongoose from 'mongoose'
let Schema = mongoose.Schema
import passportLocalMongoose from 'passport-local-mongoose'

let User = new Schema({
  username: String,
  password: String,
  tutor: Boolean
})

User.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', User)
