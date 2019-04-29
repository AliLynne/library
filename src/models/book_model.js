const mongoose = require('mongoose')
const ReviewSchema = require('./review_schema')
const Schema = mongoose.Schema

const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Book needs a title']
  },
  author: {
    type: String,
    required: [true, 'Book needs an author']
  },
  summary: {
    type: String,
    required: [true, 'Book needs a summary']
  },
  reviews: [ReviewSchema],
  likes: Number
})

BookSchema.virtual('reviewCount').get(function() {
  return this.reviews.length
})




const Book = mongoose.model('book', BookSchema)
module.exports = Book