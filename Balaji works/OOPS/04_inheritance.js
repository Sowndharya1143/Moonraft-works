console.log("---------------Inheritance-------------------");

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// prototypes => getSummary
Book.prototype.getSummary = function () {
    return `${this.title} is written by ${this.author} in ${this.year}`
};


//Magazine constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

// we cannot inherit method from prototypes..so, use
Magazine.prototype = Object.create(Book.prototype);
//place this line before object creation / instantiation

//Instansiate Magazine object
const mag1 = new Magazine('mag1', 'BALAJI', 2018, "JAN");

console.log(mag1);
console.log(mag1.getSummary());

//make use of magazine constructor
Magazine.prototype.constructor = Magazine;
console.log(mag1);