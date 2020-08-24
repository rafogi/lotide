const assert = require('chai').assert;
const middle = require('../middle');



describe("middle", () => {
  it("should return [2] when middle([1, 2, 3])", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("should return [3] when middle([1, 2, 3, 4, 5]);", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return [2,3] when middle([1, 2, 3, 4])", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3]);
  });

  it("should return [3,4] when middle([1, 2, 3, 4, 5, 6])", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("should return [] when middle([1])", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("should return [] when middle([1,2])", () => {
    assert.deepEqual(middle([1,2]), []);
  });
});

// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);