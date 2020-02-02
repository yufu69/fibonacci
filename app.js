'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  } else {
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return memo.get(n);
  }
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