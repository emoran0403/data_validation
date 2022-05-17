// Integer Validation - resolves a promise if input value is a positive integer
/**
 * Reject if any of the following fails:
 * input does not exist - !num
 * input is not a number - isNaN(num)
 * input is a decimal - Math.floor(num) !== num
 * input is less than 1 - num < 1
 */

function isValidInteger(num) {
  return new Promise((resolve, reject) => {
    if (!num || isNaN(num) || Math.floor(num) !== num || num < 1) {
      reject("Bad data - not an integer");
    } else {
      resolve("Good data - is an integer");
    }
  });
}

// String Validation - resolves a promise if a given array of strings exist, and if they are of type string
/**
 * Reject if any of the following fails:
 * string does not exist - string
 * string is not of type string - typeof string === "string"
 */

function isValidString(array) {
  return new Promise((resolve, reject) => {
    if (!array.every((string) => string && typeof string === "string")) {
      reject("Bad data - not a valid string");
    } else {
      resolve("Good data - is a string");
    }
  });
}

// String Length Validation - resolves a promise if an array of strings are within the given lengths
/**
 * Reject if any of the following fails:
 * string at [0] is not a valid string
 * string at [0] is greater than or equal to the number at [1]
 *
 * Sample Input: (Resolves) [["myString", 20], ["mySecondString", 35]]
 * Sample Input: (Rejects on length) [["myString", 5], ["mySecondString", 35]]
 * Sample Input: (Rejects on type) [[true, 5], ["mySecondString", 35]]
 */
//

function isValidStringLength(array) {
  return new Promise((resolve, reject) => {
    if (!array.every((pair) => typeof pair[0] === "string" && pair[0].length < pair[1])) {
      reject("Bad data - string is not in range");
    } else {
      resolve("Good data - string is in range");
    }
  });
}

// Email Validation - resolves a promise if a given email matches an email pattern

function isValidEmail(email) {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isEmail = emailRegex.test(email.toLocaleLowerCase());

  return new Promise((resolve, reject) => {
    if (!isEmail) {
      reject(`Bad data - not an email`);
    } else {
      resolve("Good data - is an email");
    }
  });
}

const Validation = {
  isValidInteger,
  isValidString,
  isValidEmail,
  isValidStringLength,
};

module.exports = { Validation };

/**
 * Sample Implementation:
 * Validation.isValidInteger(12).then().catch(err => console.log(err));
 * Valiidation.isValidString('some string').then().catch(err => console.log(err));
 * Validation.isValidEmail('youremail@domain.com').then().catch(err => console.log(err));
 * Validation.isValidStringLength([['first string', 255], ['next string', 50]]).then().catch(err => console.log(err));
 */
