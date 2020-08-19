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


const middle = function (array) {
  const newAr = [];
  const mid = Math.floor(array.length / 2)

  if(array.length <= 2){
    return newAr;
  }
  if (array.length % 2 === 0) {
    newAr.push(array[mid -1]);
    newAr.push(array[mid]);
  } else {
    newAr.push(array[mid]);
  }
  return newAr;
}

assertArrayEqual(middle([1, 2, 3]), [2]);
assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArrayEqual(middle([1]), []);
assertArrayEqual(middle([1, 2]), []);