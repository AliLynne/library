// const assert = require('chai').assert
// const Book = require('../../src/models/book_model')

// describe('Virtual Types', () => {
//   it('reviewCount returns number of reviews', () => {
//     const newBook = new Book({
//       title: 'Book Title',
//       author: 'Book Author',
//       summary: 'Book Summary blah blah blah',
//       reviews: [{ content: 'I am a book review!'}]
//     })

//     newBook.save()
//       .then(() => Book.findOne({ title: 'Book Title'}))
//       .then((book) => {
//         assert(book.reviewCount === 1)
//         done()
//       })
//   })
// })