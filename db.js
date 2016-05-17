var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var Message = new Schema({
  title : String,
  author : String,
  description : String,
  updated_at : Date
});