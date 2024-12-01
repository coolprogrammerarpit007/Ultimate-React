const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

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
