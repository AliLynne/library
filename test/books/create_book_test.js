const assert = require('chai').assert
const Book = require('../../src/models/book_model')
const User = require('../../src/models/user_model')

describe('Creating books', () => {
  it('saves a book', (done) => {
    const author = new User({ name: 'Test Author' })
    const testBook = new Book({ 
      title: 'Test title',
      summary: 'Test Summary'
    })

    testBook.author.push(author)

    testBook.save()
      .then(() => {
        assert(!testBook.isNew)
        done()
      })
  })

  xit('should be invalid if title is empty', (done) => {
    const untitledBook = new Book({
      author: 'Book Author',
      summary: 'Book summary lorem ipsum etc'
    })

    untitledBook.validate((err) => {
      assert.include(err.message, 'Book needs a title', 'Error message contains title message')
      done()
    })
  })
  xit('should be invalid if author is empty', (done) => {
    const unAuthoredBook = new Book({
      title: 'Book title',
      summary: 'Book summary lorem ipsum etc'
    })

    unAuthoredBook.validate((err) => {
      assert.include(err.message, 'Book needs an author', 'Error message contains author text')
      done()
    })
  })
  xit('should be invalid if summary is empty', (done) => {
    const unSummariedBook = new Book({
      title: 'Book title',
      author: 'Book Author'
    })

    unSummariedBook.validate((err) => {
      assert.include(err.message, 'Book needs a summary', 'Error message contains summary text')
      done()
    })
  })
})