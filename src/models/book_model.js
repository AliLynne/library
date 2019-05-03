const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
  title: {
    type: String
  },
  author: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }],
  summary: {
    type: String
  },
  reviews: [{ 
    type: Schema.Types.ObjectId,
    ref: 'review'
  }]
})

BookSchema.virtual('reviewCount').get(function() {
  return this.reviews.length
})




const Book = mongoose.model('book', BookSchema)
module.exports = Book