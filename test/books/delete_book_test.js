const assert = require('chai').assert
const Book = require('../../src/models/book_model')
const User = require('../../src/models/user_model')

describe('Deleting a book', () => {
  let testBook
  let author

  beforeEach((done) => {
    author = new User({ name: 'Test Author' })
    testBook = new Book({ 
      title: 'Test title',
      summary: 'Test Summary'
    })

    testBook.author.push(author)

    testBook.save()
      .then(() => done())
  })
  // model = newBook
  it('model instance remove', (done) => {
    testBook.remove()
      .then(() => Book.findOne({ title: 'Test title'}))
      .then((user) => {
        assert(user === null, 'expected user === null')
        done()
      })
  })
  // class = Book
  it('class method deleteMany', (done) => {
    // removes a bunch of records with given criteria
    Book.deleteMany({ title: 'Test title' })
      .then(() => Book.findOne({ title: 'Test title'}))
      .then((book) => {
        assert(book === null)
        done()
      })
  })
  it('class method findAndRemove', (done) => {
    Book.findOneAndRemove({ title: 'Test title' })
      .then(() => Book.findOne({ title: 'Test title'}))
      .then((book) => {
        assert(book === null)
        done()
      })
  })
  it('class method findByIdAndRemove', (done) => {
    
    Book.findByIdAndRemove(testBook._id)
      .then(() => Book.findOne({ title: 'Test title'}))
      .then((book) => {
        assert(book === null)
        done()
      })
  })
})