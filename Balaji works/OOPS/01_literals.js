// object literals
console.log("---------------Object Literals-------------------");
const book1 = {
    title: "Book One",
    author: "BALAJI",
    year: 2013,
    getSummary: function () {
        return `${this.title} is written by ${this.author} in ${this.year}`
    }
}

console.log(book1.title);
console.log(book1.getSummary());

// get the values of an  --> returns an array of values 
console.log(Object.values(book1));

//get the keys of an object --> returns an array of keys
console.log(Object.keys(book1));
