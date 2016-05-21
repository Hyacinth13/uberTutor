import mongoose from 'mongoose'
let Schema = mongoose.Schema

let Message = new Schema({
  id: String,
  channelID: String,
  text: String,
  user: Object,
  time: String
})

module.exports = mongoose.model('Message', Message)
