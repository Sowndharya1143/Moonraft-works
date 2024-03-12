const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', check1);

// function test() {
//   console.log(this);
// }

function test(ele, t) {
    console.log(this, ele, t);
}

// function test(ele, t) {
//   console.log(this, ele, t);
// }

function check1(e) {
  console.log(e);
  console.log(this);
}

class ButtonTest {
  constructor() {
    const btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', this.check);
  }

  check() {
    console.log(this);
  }
}

const btnTest = new ButtonTest()