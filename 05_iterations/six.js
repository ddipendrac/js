const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// look all values of an object and provide as parameter to callback func and use logic
// const newNum = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(newNum);


// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books = [
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
    { title: 'Book Ten', genre: 'Fantasy', publish: 1995, edition: 2005 },
    { title: 'Book Eleven', genre: 'Mystery', publish: 2002, edition: 2012 },
    { title: 'Book Twelve', 'genre': 'Romance', publish: 1998, edition: 2008 },
    { title: 'Book Thirteen', 'genre': 'Horror', publish: 2005, edition: 2015 }
];
  
// const userBooks = books.filter( (book) => book.genre === "Science")

const userBooks = books.filter( (book) => {
    return book.edition >= 2000
}) 
console.log(userBooks);
  