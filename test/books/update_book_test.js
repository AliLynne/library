const assert = require('chai').assert
const Book = require('../../src/models/book_model')
const User = require('../../src/models/user_model')

describe('Updating books', () => {
  let newBook
  let author

  beforeEach((done) => {
    author = new User({ name: 'Test Author' })
    newBook = new Book({ 
      title: 'Test title',
      summary: 'Test Summary '
    })

    newBook.author.push(author)

    newBook.save()
      .then(() => done())
  })

  function assertSummary(operation, done) {
    operation
      .then(() => Book.find())
      .then((books) => {
        assert.typeOf(books, 'array')
        assert(books.length === 1)
        assert.include(books[0].summary, 'Updated Summary')
        done()
      })
  }

  function assertAuthor(operation, done) {
    operation
      .then(() => Book.find())
      .then((books) => {
        //assert.typeOf(books, 'array')
        assert(books.length === 1)
        assert(books[0].author === 'Updated Author')
        done()
      })
  }

  function assertTitle(operation, done) {
    operation
    .then(() => Book.find())
    .then((books) => {
      //assert.typeOf(books, 'array')
      assert(books.length === 1)
      assert(books[0].title === 'Updated Title')
      done()
    })
  }

  it('updates a book title using set and save', (done) => {
    newBook.set('title', 'Updated Title')
    assertTitle(newBook.save(), done)
  })

  xit('updates a book author using set and save', (done) => {
    newBook.set('author', 'Updated Author')
    assertAuthor(newBook.save(), done)
  })

  it('updates a book summary using set and save', (done) => {
    newBook.set('summary', 'Updated Summary')
    assertSummary(newBook.save(), done)
  })

  it('updates a book title using updateOne', (done) => {
    assertTitle(newBook.updateOne({ title: 'Updated Title'}), done)
  })

  xit('updates a book author using updateOne', (done) => {
    assertAuthor(newBook.updateOne({ author: 'Updated Author' }), done)
  })
  it('updates a book summary using updateOne', (done) => {
    assertSummary(newBook.updateOne({ summary: 'Updated Summary' }), done)
  })

  it('updates a book title using updateMany', (done) => {
    assertTitle(
      Book.updateMany({ title: 'Test title'}, { title: 'Updated Title'}),
      done
    )
  })

  xit('updates a book author using updateMany', (done) => {
    assertAuthor(
      Book.updateMany({ author: 'Test Author'}, { author: 'Updated Author'}),
      done
    )
  })

  it('updates a book summary using updateMany', (done) => {
    assertSummary(
      Book.updateMany({ summary: /Test(?=\s+Summary)/}, { summary: 'Updated Summary'}),
      done
    )
  })

  it('updates a book title using findOneAndUpdate', (done) => {
    assertTitle(
      Book.findOneAndUpdate({ title: 'Test title' }, { title: 'Updated Title'}),
      done
    )
  })

  xit('updates a book author using findOneAndUpdate', (done) => {
    assertAuthor(
      Book.findOneAndUpdate({ author: 'Test Author'}, { author: 'Updated Author'}),
      done
    )
  })

  it('updates a book summary using findOneAndUpdate', (done) => {
    assertSummary(
      Book.findOneAndUpdate({ summary: /Test(?=\s+Summary)/}, { summary: 'Updated Summary'}),
      done
    )
  })

  it('updates a book title using findByIdAndUpdate', (done) => {
    assertTitle(
      Book.findByIdAndUpdate(newBook._id, { title: 'Updated Title'}),
      done
    )
  })

  xit('updates a book author using findByIdAndUpdate', (done) => {
    assertAuthor(
      Book.findByIdAndUpdate(newBook._id, { author: 'Updated Author'}),
      done
    )
  })

  it('updates a book summary using findByIdAndUpdate', (done) => {
    assertSummary(
      Book.findByIdAndUpdate(newBook._id, { summary: 'Updated Summary'}),
      done
    )
  })

  xit('increments a books like count by one', (done) => {
    Book.updateOne({ title: 'Test Book Title'}, { $inc: { likes: 10 } })
      .then(() => Book.findOne({ title: 'Test Book Title'}))
      .then((book) => {
        assert(book.likes === 10)
        done()
      })
  })
})