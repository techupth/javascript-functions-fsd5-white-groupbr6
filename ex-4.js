// Start coding here
let calculator = {
  add: (a, b) => {
    if (Number.isInteger(a) && Number.isInteger(b)) {
      return a + b;
    } else {
      return "please put number type argument";
    }
  },
  subtract: (a, b) => {
    if (Number.isInteger(a) && Number.isInteger(b)) {
      return a - b;
    } else {
      return "please put number type argument";
    }
  },
  multiply: (a, b) => {
    if (Number.isInteger(a) && Number.isInteger(b)) {
      return a * b;
    } else {
      return "please put number type argument";
    }
  },
  divide: (a, b) => {
    if (Number.isInteger(a) && Number.isInteger(b)) {
      return a / b;
    } else {
      return "please put number type argument";
    }
  },
};

let addResult = calculator.add(10, 20);
console.log(addResult);

let divideResult = calculator.divide(3000, 10);
console.log(divideResult);
