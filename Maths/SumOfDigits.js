/*
  Gets the sum of the digits of the numbers inputted
  sumOfDigits(10) will return 1 + 0 = 1
  sumOfDigits(255) will return 2 + 5 + 5 = 12
  Wikipedia: https://en.wikipedia.org/wiki/Digit_sum
*/

function sumOfDigitsUsingString(number) {
  if (number < 0) {
    number = -number;
  }

  return calculateDigitSumWithStringConversion(number);
}

function sumOfDigitsUsingLoop(number) {
  if (number < 0) {
    number = -number;
  }

  return calculateDigitSumWithLoop(number);
}

function sumOfDigitsUsingRecursion(number) {
  if (number < 0) {
    number = -number;
  }

  return calculateDigitSumWithRecursion(number);
}

function calculateDigitSumWithStringConversion(number) {
  const digitArray = number.toString().split('').map(Number);
  return digitArray.reduce((sum, digit) => sum + digit, 0);
}

function calculateDigitSumWithLoop(number) {
  let sum = 0;

  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }

  return sum;
}

function calculateDigitSumWithRecursion(number) {
  if (number < 10) {
    return number;
  }

  return (number % 10) + calculateDigitSumWithRecursion(Math.floor(number / 10));
}

export {
  sumOfDigitsUsingRecursion,
  sumOfDigitsUsingLoop,
  sumOfDigitsUsingString
};
