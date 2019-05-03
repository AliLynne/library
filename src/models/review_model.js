const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReviewSchema = new Schema ({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const Review = mongoose.model('review', ReviewSchema)
module.exports = Review