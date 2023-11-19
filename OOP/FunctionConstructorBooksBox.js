"use strict";

// 1-Create (using function constructor not Es6 classes) your box object that contains books objects, ensure that you can

const Book = function (title, author, numOfPages, numOfCopies) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.numOfCopies = numOfCopies;

  // d. Create Class Property (static) that counts numbers of created books objects
  Book.numOfcreatedBooks = (Book.numOfcreatedBooks || 0) + 1;
};

// d. Create Class Property (static) that counts numbers of created books objects and Class method to retrieve it.
Book.getNumOfcreatedBooks = function () {
  return Book.numOfcreatedBooks || 0;
};

const Box = function (height, width, length, material) {
  this.height = height;
  this.width = width;
  this.length = length;
  this.material = material;
  this.content = [];
};

// b. Count # of books inside box
Box.prototype.countNumOfBooks = function () {
  //   let numOfBooks = 0;
  //   for (const book of this.content) {
  //     numOfBooks += book.numOfCopies;
  //   }
  //   return numOfBooks;
  return this.content.length;
};

// c. Delete any of these books in box according to book title. Note: You should delete a single copy of the books with the same title.
Box.prototype.deleteBook = function (title) {
  const bookIndex = this.content.findIndex((book) => book.title === title);
  if (bookIndex > -1) {
    this.content[bookIndex].numOfCopies -= 1;
    if (this.content[bookIndex].numOfCopies <= 0) {
      this.content.splice(bookIndex, 1);
    }
  }
};

// e. Use .toString() to display the box instance’s dimensions
Box.prototype.toString = function () {
  return `Box dimensions: ${this.height} x ${this.width} x ${this.length} cm`;
};

// f. Implement .valueof() so that if there is more than one box object, we can get total number of books in these boxes by adding them i.e. if box1 has 5 books and box2 has 2 books, then box1 + box2 should return 7
Box.prototype.valueOf = function () {
  return this.content.reduce((total, book) => total + book.numOfCopies, 0);
};

/*---------- Testing ----------*/

// a. Create book object and add it to box object content property
const book1 = new Book("book1", "author1", 243, 3);
const book2 = new Book("book2", "author2", 311, 5);

const box1 = new Box(9, 11, 7, "Material1");
box1.content = [book1, book2];

// Book functions
console.log(`Number of created books: ${Book.getNumOfcreatedBooks()}`);

// Box functions
console.log(`Number of books in box1: ${box1.countNumOfBooks()}`);
console.log(box1.toString());

const book3 = new Book("book3", "author3", 153, 2);

const box2 = new Box(13, 10, 10, "Material2");
box2.content = [book3];

console.log(`Total number of books in box1 and box2: ${box1 + box2}`);

const book4 = new Book("book4", "author4", 200, 1);
box2.content.push(book4);

box2.deleteBook("book3");
box2.deleteBook("book4");
console.log(box2.content);
