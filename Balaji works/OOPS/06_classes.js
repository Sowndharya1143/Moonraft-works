class Books {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} is written by ${this.author} in ${this.year}`
    }

    getAge() {
        return `${this.title} is ${new Date().getFullYear() - this.year} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore() {
        return 'Balaji and Gayu'
    }
}

//Instansiate Object
const Book5 = new Books("TS", "BALAJI", 2012);
console.log(Book5);
console.log(Book5.getSummary());
console.log(Book5.getAge());
Book5.revise(2018);
console.log(Book5);

// To run static methods use class
console.log(Books.topBookStore())