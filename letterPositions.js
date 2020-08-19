const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`${arr1} === ${arr2} , this solution passed`);
  } else {
    console.log(`${arr1} !== ${arr2} , this solution failed`);
  }

};

const letterPositions = function(string) {

  const letters = {};
  let index = 0;
  for (const str of string) {
    if (str !== " ") {
      if (!letters[str]) {
        letters[str] = [index];
      } else {
        letters[str].push(index);
      }
    }
    index += 1;
  }
  return letters;

};

console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);