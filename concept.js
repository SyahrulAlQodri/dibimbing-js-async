// function myFirst() {
//   console.log('first');
// }

// const myFirst = function () {
//   console.log('first');
// };

const display = (content) => {
  console.log(content);
};

const calculate = (a, b, callback) => {
  if (callback) {
    callback(a + b);
  } else {
    return a + b;
  }
};

calculate(10, 20, display);
