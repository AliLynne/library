const mongoose = require('mongoose')
const assert = require('chai').assert
const User = require('../src/models/user_model')
const Review = require('../src/models/review_model')
const Book = require('../src/models/book_model')

describe('Association tests', () => {
  let testBook, testUser, testReview

  beforeEach((done) => {
    testBook = new Book({
      title: 'Book Title'
    })
    testUser = new User({
      name: 'User Name'
    })
    testReview = new Review({
      content: 'I am a bunch of review content.'
    })

    testBook.author.push(testUser)
    testBook.reviews.push(testReview)
    testUser.reviews.push(testReview)
    testReview.author = testUser

    Promise.all([testBook.save(), testUser.save(), testReview.save()])
      .then(() => done())
  })

  it('saves a relation between a user and a review', (done) => {
    User.findOne({ name: 'User Name' }).populate('reviews')
      .then((user) => {
        assert(user.reviews[0].content === 'I am a bunch of review content.')
        done()
      })
  })

  it('saves a full relation graph', (done) => {
    Book.findOne({ title: 'Book Title'})
      .populate({
        path: 'reviews',
        populate: {
          path: 'author',
          model: 'user',
          populate: {
            path: 'author',
            model: 'review'
          }
        }
      })
      .then((book) => {
        assert(book.title === 'Book Title')
        assert(book.reviews[0].content === 'I am a bunch of review content.')
        assert(book.reviews[0].author.name === 'User Name')
        done()
      })
  })
})