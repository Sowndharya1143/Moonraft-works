console.log("---------------Constructors-------------------");

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function () {
        return `${this.title} is written by ${this.author} in ${this.year}`
    };
}

//Instansiate an object 
const Book1 = new Book("Book2", "GAYU", 1998);

console.log(Book1.title);
console.log(typeof Book1);
console.log(Book1);
console.log(Book1.getSummary());