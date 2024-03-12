class TestBooks {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} is written by ${this.author} in ${this.year}`
    }
}

// TestMagazine subclass
class TestMagazine extends TestBooks {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// Instantiate TestMagazine
const testMagazine1 = new TestMagazine("Test Magazine", "Test Author", 2018, "JAN");
console.log(testMagazine1);
console.log(testMagazine1.getSummary());