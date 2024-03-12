let obj = {
    num: 2
}

console.log("-----------CALL-----------");
const addValue = function (val, a, b, c) {
    this.num = this.num + val + a + b + c;
    return this.num;
}

console.log(addValue.call(obj, 1, 2, 3, 4));

console.log("-----------APPLY-----------");

let anotherObj = {
    num: 2
}

let argArray = [1, 2, 3, 4];
console.log(addValue.apply(anotherObj, argArray));

console.log("-----------BIND-----------");

let anotherAnotherObj = {
    num: 2
}

let bound = addValue.bind(anotherAnotherObj, 1, 2, 3, 4);
console.log(bound());

// (or)

// let bound = addValue.bind(anotherAnotherObj);
// console.log(bound(1, 2, 3, 4));


console.log("---------------------");
console.log("----OTHER FEATURES-----");
console.log("-------CALL------");

const add = function (c) {
    return this.a + this.b + c;
}

const testObj = {
    a: 1,
    b: 2
}

console.log(add.call(testObj, 3));

console.log("-------FEATURE 1------");
// inherit array prototypes

let argsToArray = function () {
    console.log(arguments); // This is not an array and has no array methods
    // to inherit array methods use call like,
    let ar = [].slice.call(arguments);
    console.log(typeof ar);
    console.log(ar[1]);
}

argsToArray(1, 2, 3);

console.log("-------FEATURE 2------");
//inherit prototype of base constructor from child

let Mammal = function (legs) {
    this.legs = legs;
}

let Cat = function (legs, isDomesticated) {
    Mammal.call(this, legs);
    this.isDomesticated = isDomesticated;
}

let lion = new Cat(4, false);
console.log(lion);

console.log("-------APPLY------");

let newObj = {
    a: 1
}

let testAdd = function (b, c) {
    return this.a + b + c;
}

console.log(testAdd.apply(newObj, [2, 3]));
console.log("-------FEATURE 1------");
// converts array into regular args

let anotherArr = [1, 10, 1000];
let minArray = Math.min.apply(null, anotherArr);
console.log(minArray);
let maxArray = Math.max.apply(null, anotherArr);
console.log(maxArray);
// also we can do it by

console.log(Math.min(...anotherArr));
console.log(Math.max(...anotherArr));


console.log("-------BIND------");
console.log("-------FEATURE 1------");

let Button = function (content) {
    this.content = content;
}

Button.prototype.click = function () {
    console.log(`${this.content} clicked`);
}

let newButton = new Button('add');
newButton.click();

// loosely bound
let bounded = newButton.click;
bounded();

// to overcome this use bind
let boundedClick = newButton.click.bind(newButton);
boundedClick();
console.log("-------FEATURE 2------");
// to avoid problem of this

let asynObj = {
    asyncGet(cb) {
        cb();
    },
    parse() {
        console.log("parese called");
    },
    render() {
        this.asyncGet(function () {
            this.parse();
        });
    }
}

// asynObj.render(); // uncomment to check this

// this problem could be solved by using catching this or by using bind


let anontherAsynObj = {
    asyncGet(cb) {
        cb();
    },
    parse() {
        console.log("parese called");
    },
    render() {
        let that = this;
        this.asyncGet(function () {
            that.parse();
        });
    }
}

anontherAsynObj.render();


let anotherAnotherAsyncObj = {
    asyncGet(cb) {
        cb();
    },
    parse() {
        console.log("parese called");
    },
    render() {
        this.asyncGet(function () {
            this.parse();
        }.bind(this));
    }
}

anotherAnotherAsyncObj.render();