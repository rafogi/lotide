const tail = require('../tail');
const assert = require('chai').assert;

const assertEqual = require('../assertEqual');

const result = tail(["Hello", "Lighthouse", "Labs"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);


describe("#tail", () => {
  it("returns 2 elements when we do result.length", () => {
    assert.strictEqual(result.length, 2);
  });

  it("ensures first element is 'Lighthouse'", () => {
    assert.strictEqual(result[0], 'Lighthouse'); 
  });

  it("ensures second element is 'Labs'", () => {
    assert.strictEqual(result[1], 'Labs'); 
  });

  it("should ensure original array still has 3 elements", ()=> {
    assert.strictEqual(words.length, 3);
  });
});





