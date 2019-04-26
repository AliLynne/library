const assert = require('chai').assert
const Book = require('../../src/models/book_model')

describe('Subdocuments', () => {
  it('can create a subdocument', (done) => {
    const testBook = new Book({
      title: 'Book Title',
      author: 'Book Author',
      summary: 'Book Summary',
      reviews: [{ content: 'This is a good book'}]
    })
    testBook.save()
      .then(() => Book.findOne({ title: 'Book Title'}))
      .then((book) => {
        assert.typeOf(book, 'object')
        assert(book.reviews[0].content === 'This is a good book')
        done()
      })

  })
})