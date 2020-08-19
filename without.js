const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  };
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  };
  return true;
};

const assertArrayEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`${arr1} === ${arr2} , this solution passed`);
  } else {
    console.log(`${arr1} !== ${arr2} , this solution failed`);
  }

};


const without = function (ar1, ar2) {
  const newAr = [...ar1];
  for (i = 0; i < ar1.length; i++) {
    for (j = 0; j < ar2.length; j++) {
      if (newAr[i] === ar2[j]) {
        newAr.splice(i, 1);
      }

    }
  }
  return newAr;
}

console.log(without([1,2,3,1], [1]));
console.log(without([1, 2, 3], [1]));
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEqual(words, ["hello", "world", "lighthouse"]);

