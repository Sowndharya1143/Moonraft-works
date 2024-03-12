// Object of protos

console.log("---------------Object.create()-------------------");

const bookProtos = {
    getSummary: function () {
        return `${this.title} is written by ${this.author} in ${this.year}`;
    },
    getAge: function () {
        return `${this.title} is ${new Date().getFullYear() - this.year} years old`;
    }
}


//create object
const book3 = Object.create(bookProtos);
book3.title = 'TEST BOOK';
book3.author = 'TEST AUTHOR';
book3.year = 2018;

console.log(book3);
console.log(book3.getAge());

// Another way 
const book4 = Object.create(bookProtos, {
    title: {
        value: 'TEXT BOOK4'
    },
    author: {
        value: 'TEST AUTHOR'
    },
    year: {
        value: 2017
    }
});

console.log(book4);
console.log(book4.getAge());