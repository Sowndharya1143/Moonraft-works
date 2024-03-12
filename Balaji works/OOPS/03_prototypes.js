console.log("---------------Prototypes-------------------");

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// prototypes => getSummary
Book.prototype.getSummary = function () {
    return `${this.title} is written by ${this.author} in ${this.year}`
}

// get the age of the books
Book.prototype.getAge = function () {
    return `${this.title} is ${new Date().getFullYear() - this.year} years old`;
}

// Revise the year of books
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
}

//Instansiate an object 
const Book2 = new Book("TestBook", "GAYU", 1998);

console.log(Book2.title);
console.log(typeof Book2);
console.log(Book2);
console.log(Book2.getSummary());
console.log(Book2.getAge());
console.log("--->", Book2);
console.log(Book2.revise(2019));
console.log("--->", Book2);