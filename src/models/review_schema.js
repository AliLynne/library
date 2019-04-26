const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReviewSchema = new Schema ({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = ReviewSchema