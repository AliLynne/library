const assert = require('chai').assert
const Book = require('../../src/models/book_model')
const User = require('../../src/models/user_model')

describe('Reading books out of the database', () => {
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

  it('finds all books with a title of \'I am a book title\'', (done) => {
    Book.find({ title: 'Test title'})
      .then((books) => {
        assert(books[0]._id.toString() === testBook._id.toString())
        done()
      })
  })

  it('finds a book with a particular id', (done) => {
    Book.findOne({ _id: testBook._id })
      .then((book) => {
        assert(book.title === 'Test title')
        done()
      })
  })

  xit('finds all books with a particular author', (done) => {
    Book.find({ author: 'Test Author' }).populate('')
      .then((books) => {
        assert.typeOf(books, 'array')
        assert(books.length === 1)
        assert(books[0].author === 'Test Author')
        done()
      })
  })
  it('finds all books whose summary contains a certain string')
})