
const new_data = require('./data');
const data = new_data.data;
// console.log(data);


function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}


// destructuring

// destructuring of objects
//  destructuring of objects depend on name of property
const books = getBooks();
// console.log(books);

const gameOfThronesBook = getBook(1);
// console.log(gameOfThronesBook);

const {title:bookTitle,author:bookAuthor,genres} = gameOfThronesBook;
// console.log(`Title of Book is: ${bookTitle} ,which is written by ${bookAuthor}`);

// destructuring of arrsys -> this depends on position of elements.

// console.log(genres);

// const [genere1 , genere2, genere3,genere4] = genres;
// console.log(genere2)

// Rest and Spread Opreator

const [primaryGenre,secondaryGenre,...otherGenres]  = genres; // example of Rest opreator
// Rest Opreator is used to pack other elements into a single variable.
// Spread Opreator is use to unpacks an array or object

// console.log(primaryGenre);
// console.log(secondaryGenre);
// console.log(otherGenres);


const newGenres = [...genres,"Sports Genre","Adult Genre"];
// console.log(newGenres);


// Spread Opreator allows us to add new properties into a Object and update a property.

const book1 = getBook(1);
const book2 = getBook(2);
// console.log(book2);

const updatedBook = {...book2, moviePublicationDate:'2021-12-05',hasMovieAdaptation:true};

// console.log(updatedBook);

// Ternary Operatory

const result = getBook(1).pages > 100 ? 'More Than 1000 Pages!' : 'Less Than 1000 Pages';
// console.log(result);


// Arrow Functions

const updatedBook1 = (id) => {
  return data.find(d => d.id === id);
}
const getYear = (date) => {
  const arr = date.split(`-`);
  return arr[0];
}

// console.log(getYear(`2024-17-11`));


// Short-circuting in logical operator means that in some conditions in case of && and || operator it will result first value without checking other conditions.

// falsey values : 0,undefined,null,false.''

// console.log(false && 'has Movie Adaptation!');
// console.log(true && `has Movie Adaptation!` );

// console.log('Jonas JS ' && 'React Development');
// console.log('Jonas JS ' && 0);

// nullish-coaleshing operator -> this will short-circuit only on null and undefined not on 0 or ''

// console.log(book1);


// optional chaining
const gameOfThronesBookReviewCount = (book) =>
{
  const ggodradsReview = book.reviews.goodreads.ratingsCount;
  const libraryReview = book.reviews.librarything?.ratingsCount ?? 0; // optional chaining -> if libraryrating exist then it will go further or not

  return ggodradsReview + libraryReview;
}

console.log(gameOfThronesBookReviewCount(getBook(3)));
