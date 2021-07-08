
let result = 1;
let count;
function recursionMultiply(number) {
  for (count = number; count > 0; count--) {
    result *= count;
  }
  return result;
};
console.log(recursionMultiply(5));

// ##########################################################

let result2 = 1;
let count2;
function recursionAdd(number2) {
  for (count2 = number2; count2 > 1; count2--) {
    result2 += count2;
  }
  return result2;
};
console.log(recursionAdd(5));

// ##########################################################
let result1 = 1;
function multiply1(number1) {
  if (number1 <= 0) { // terminal case
    return 1;
  } else { // block to execute
    result1 = (number1 * multiply1(number1 - 1));
    return result1;
  }
};
console.log(multiply1(5));

// ##########################################################

let result3 = 1;
function add1(number3) {
  if (number3 <= 0) { // terminal case
    return 0;
  } else { // block to execute
    result3 = (number3 + add1(number3 - 1));
    return result3;
  }
};
console.log(add1(5));

