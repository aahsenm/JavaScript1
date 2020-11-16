'use strict';

const myBook = [
    {
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        alreadyRead: true,
    },
    {
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        alreadyRead: true,
    },
    {
        title: 'Moby Dick',
        author: 'Herman Melville',
        alreadyRead: false,
    }
]

const sentences = [];
 for(let i = 0; i <= 2; i++) {
   const book = myBook[i];
   let sentence = book.title + " by " + book.author;
   console.log(sentence);
   if (book.alreadyRead) {
        console.log("You already read " + book.title);
   } else {
        console.log("You still need to read " + book.title);
   }
 }