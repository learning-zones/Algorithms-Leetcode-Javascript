/*
Sum of Square Numbers
https://leetcode.com/problems/sum-of-square-numbers/description/

Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

Example 1:
Input: 5
Output: True
Explanation: 1 * 1 + 2 * 2 = 5

Example 2:
Input: 3
Output: False
*/

const assert = require('assert');

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  var iter = 0;
  var set = new Set();
  while(iter ** 2 <= c) {
    var square = iter * iter;
    if(square * 2 === c || set.has(c - square))
      return true;

    set.add(square);
    iter++;
  }
  
  return false;
};

var main = function() {
  test();
}

var test = function() {
  assert.strictEqual(judgeSquareSum(0), true);
  assert.strictEqual(judgeSquareSum(1), true);
  assert.strictEqual(judgeSquareSum(5), true);
  assert.strictEqual(judgeSquareSum(16), true);
  assert.strictEqual(judgeSquareSum(24), false);
  assert.strictEqual(judgeSquareSum(25), true);
}

module.exports.main = main;

