const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: "${actual}" !== "${expected}"`);
  } else {
    console.log(`✅✅✅Assertion Passed: "${actual}" === "${expected}"`);
  }
};

const eqArrays = function(array1, array2) {
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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const ob1l = Object.keys(object1); //returns array of object1
  const ob2l = Object.keys(object2); // returns array of object2
  if (ob1l.length !== ob2l.length) { //returns false if length of first object not equal length of 2nd
    return false;
  }
  for (const obs in object1) {
    if (Array.isArray(object1[obs])) { //check if the object is an array
      if (!eqArrays(object1[obs], object2[obs])) { //call eqArrays function to check if arrays match
        return false; //
      }
    } else {
      if (object1[obs] !== object2[obs]) {
        return false;
      }
    }
  }
  return true;
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

//assertEqual(eqObjects(ab,ba), true);
//assertEqual(eqObjects(ab,abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false