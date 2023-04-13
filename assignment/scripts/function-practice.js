console.log("***** Function Practice *****");

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return "Hello World!";
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());
//FOR QUESTION 1, is there something that is needed here? I am unsure if something is missing here or not. Is this an example only? The return Hello World! is returned.
// making this already complete?
console.log("------- 1 space between questions-------");
// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}`;
}

// Remember to call the function to test
console.log(helloName("Stacy"));
console.log("------- 2 space between questions-------");
// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(addNumbers(2, 3));
console.log("------- 3 space between questions-------");
// 4. Function to multiply three numbers & return the result
function multiplyThree(n1, n2, n3) {
  return n1 * n2 * n3;
}
console.log(multiplyThree(2, 3, 4));
console.log("------- 4 space between questions-------");
// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}

// Call the function to test each outcome (true & false)
isPositive(2);

// Write a separate console.log statement for each outcome
console.log("isPositive - should say true", isPositive(3));
console.log("isPositive - should say false", isPositive(0));
console.log("isPositive - should say false", isPositive(-3));
console.log("------- 5 space between questions-------");
// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
  if (array === undefined) {
    return "undefined";
  } else {
    return array[array.length - 1];
  }
}

console.log(getLast([2, 3, 4, 5, 6]));
console.log(getLast());
console.log("------- 6 space between questions-------");
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  for (obj of array) {
    if (value === obj) {
      return true;
    }
  }
  return false;
}

console.log(find(1, [9, 1, 2, 3, 4]));
console.log("------- 7 space between questions-------");
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string.charAt(0) === letter) return true;
  if (string.charAt(0) !== letter) return false;
}
console.log("isFirstLetter - should say true:", isFirstLetter("a", "apple"));
console.log("isFirstLetter - should say false:", isFirstLetter("z", "apple"));

// 9. Function to return the sum of all numbers in an array

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function sumAll() {
  let sum = 0;
  // TODO: loop to add items
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(sumAll());

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let positiveNumbers = [];
function returnsPositive(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveNumbers.unshift(array[i]);
    }
  }
}
returnsPositive(numbers);
console.log(positiveNumbers);
// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
