const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: "${actual}" !== "${expected}"`);
  } else {
    console.log(`✅✅✅Assertion Passed: "${actual}" === "${expected}"`);
  }
};


const countLetters = function(string) {
  const letters = {};
  for (const str of string) {
    if (str !== " ") {
      if (letters[str]) {
        letters[str] += 1;
      } else {
        letters[str] = 1;
      }
    }
  }
  return letters;
};

console.log(countLetters("abcdefgabcdef"));
console.log(countLetters("abcd efg abcdef"));

