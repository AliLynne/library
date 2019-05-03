// const assert = require('chai').assert
// const Book = require('../../src/models/book_model')

// describe('Subdocuments', () => {
//   it('can create a subdocument', (done) => {
//     const testBook = new Book({
//       title: 'Book Title',
//       author: 'Book Author',
//       summary: 'Book Summary',
//       reviews: [{ content: 'This is a good book'}]
//     })
//     testBook.save()
//       .then(() => Book.findOne({ title: 'Book Title'}))
//       .then((book) => {
//         assert.typeOf(book, 'object')
//         assert(book.reviews[0].content === 'This is a good book')
//         done()
//       })

//   })

//   it('can add subdocuments to an existing record', (done) => {
//     const testBook = new Book({
//       title: 'Book Title',
//       author: 'Book Author',
//       summary: 'Book Summary',
//       reviews: []
//     })
//     testBook.save()
//       .then(() => Book.findOne({ title: 'Book Title' }))
//       .then((book) => {
//         book.reviews.push({ content: 'I am a review!'})
//         return book.save()
//       })
//       .then(() => Book.findOne({ title: 'Book Title'}))
//       .then((book) => {
//         assert(book.reviews[0].content === 'I am a review!')
//         done()
//       })
//   })

//   it('can remove an existing subdocument', (done) => {
//     const testBook = new Book({
//       title: 'Book Title',
//       author: 'Book Author',
//       summary: 'Book Summary',
//       reviews: [{content: 'I am a review'}]
//     })
//     testBook.save()
//       .then(() => Book.findOne({ title: 'Book Title' }))
//       .then((book) => {
//         book.reviews[0].remove()
//         return book.save()
//       })
//       .then(() => Book.findOne({ title: 'Book Title'}))
//       .then((book) => {
//         assert(book.reviews.length === 0)
//         done()
//       })
//   })
// })