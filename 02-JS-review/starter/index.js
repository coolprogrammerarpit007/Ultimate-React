
// Map Method
const newData = require(`./data`);
const data = newData.data;
// console.log('hello world');
// console.log(data);

const bookTitles = data.map(book => book.title);
// console.log(bookTitles);
const bookTitleAndAuthor = data.map((book) => {
    return {
        title:book.title,
        author:book.author
    }
});
// console.log(bookTitleAndAuthor);

// filter Method

const booksMoreThan500 = data.filter(book => {
    return book.pages >= 500;
}).filter(book => book.hasMovieAdaptation);

// console.log(booksMoreThan500);

const adventureBooks = data.filter((book) => book.genres.includes('adventure')).map(book => book.title);
// console.log(adventureBooks);

// reduce method

const totalPagesToRead = data.reduce((acc,book) => acc + book.pages,0);
// console.log(totalPagesToRead);

// sort method

const arr = [1,3,9,1,5,78];
const sortedArr = arr.slice().sort((a,b) => a - b);
// console.log(sortedArr);
// console.log(arr);

const sortedBooks = data.slice().sort((a,b) => a.pages - b.pages );
console.log(sortedBooks);