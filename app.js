'use strict';
function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  
  return fib(n - 1) + fib(n -2);
}

const length = 40;
for (let i = 0; i < length; i++) {
  console.log(fib(i));
}

const assert = require('assert');
assert.equal(fib(0), 0);
assert.equal(fib(1), 1);
assert.equal(fib(2), 1);
assert.equal(fib(3), 2);
assert.equal(fib(4), 3);
assert.equal(fib(5), 5);
assert.equal(fib(6), 8);
assert.equal(fib(7), 13);
console.log('all passed')