const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String,
  booksRead: [{
    type: Schema.Types.ObjectId,
    ref: 'book'
  }],
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'review'
  }]
})

const User = mongoose.model('user', UserSchema)
module.exports = User