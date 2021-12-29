function findAuthorById(authors, id) {
  let foundAuthors = authors.find((author) => author.id === id)
  return foundAuthors
}

function findBookById(books, id) {
  let foundBooks = books.find((book) => book.id === id)
  return foundBooks
}

function partitionBooksByBorrowedStatus(books) {
  // used this filter to target all books that have been returned
  let returnedBooks = books.filter((book) => book.borrows.every((borrow) => borrow.returned === true))
  // used this filter to target all books that haven't been returned yet
  let borrowedBooks = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false))
  return [[...borrowedBooks], [...returnedBooks]]
}

function getBorrowersForBook(book, accounts) {
  //used map to loop through borrows
  return book.borrows.map((borrow) => {
    //set this variable to target accounts where the id for the account is the same as the borrow id
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  // slice 0-10 cause we only want the first 10 results
  .slice(0, 10);
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
