
function randomNumberGenerator() {
  return (randomNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100);
}
let number1 = randomNumberGenerator();
let number2 = randomNumberGenerator();
let number3 = randomNumberGenerator();
let number4 = randomNumberGenerator();
let number5 = randomNumberGenerator();

console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);
console.log(number5);

function findMaximum(number1, number2, number3, number4, number5) {
  if (
    number1 > number2 &&
    number1 > number3 &&
    number1 > number4 &&
    number1 > number5
  ) {
    return number1;
  } else if (
    number2 > number1 &&
    number2 > number3 &&
    number2 > number4 &&
    number2 > number5
  ) {
    return number2;
  } else if (
    number3 > number1 &&
    number3 > number2 &&
    number3 > number4 &&
    number3 > number5
  ) {
    return number3;
  } else if (
    number4 > number1 &&
    number4 > number2 &&
    number4 > number3 &&
    number4 > number5
  ) {
    return number4;
  } else if (
    number5 > number1 &&
    number5 > number2 &&
    number5 > number3 &&
    number5 > number4
  ) {
    return number5;
  }
}

function findMinimum(number1, number2, number3, number4, number5) {
  if (
    number1 < number2 &&
    number1 < number3 &&
    number1 < number4 &&
    number1 < number5
  ) {
    return number1;
  } else if (
    number2 < number1 &&
    number2 < number3 &&
    number2 < number4 &&
    number2 < number5
  ) {
    return number2;
  } else if (
    number3 < number1 &&
    number3 < number2 &&
    number3 < number4 &&
    number3 < number5
  ) {
    return number3;
  } else if (
    number4 < number1 &&
    number4 < number2 &&
    number4 < number3 &&
    number4 < number5
  ) {
    return number4;
  } else if (
    number5 < number1 &&
    number5 < number2 &&
    number5 < number3 &&
    number5 < number4
  ) {
    return number5;
  }
}

let maximum = findMaximum(number1, number2, number3, number4, number5);
let minimum = findMinimum(number1, number2, number3, number4, number5);

console.log("Maximum of 5 Random Numbers: " + maximum);
console.log("Minimum of 5 Random Numbers: " + minimum);