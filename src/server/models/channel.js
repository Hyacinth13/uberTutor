import mongoose from 'mongoose'
let Schema = mongoose.Schema

let Channel = new Schema ({
  name: { type:String, unique: true },
  id: String,
  private: Boolean,
  between: Array
})

module.exports = mongoose.model('Channel', Channel)