import mongoose from 'mongoose'
let Schema = mongoose.Schema
import passportLocalMongoose from 'passport-local-mongoose'

let Student = new Schema({
  username: String,
  password: String,
  displayName: String,
  tutor: Boolean
})

Student.plugin(passportLocalMongoose)

module.exports = mongoose.model('Student', Student)
