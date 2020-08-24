const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);     