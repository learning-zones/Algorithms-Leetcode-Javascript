/*
Permutations
https://leetcode.com/problems/permutations/

Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/
const assert = require('assert');

var permute = function(nums) {
  return permuteAux(nums, 0, [], new Set());
};

var permuteAux = function(nums, pos, currentSol, set) {
  if(pos === nums.length) {
    return [currentSol];
  }
  var ret = [];
  for(var i = 0; i < nums.length; i++) {
    if(!set.has(nums[i])) {
      set.add(nums[i])
      var sol = permuteAux(nums, pos + 1, currentSol.concat(nums[i]), set);
      ret = [...ret, ...sol];
      set.delete(nums[i]);
    }
  }
  return ret;
}

var main = function() {  test();
}

function test() {
  // assert.deepEqual(
  assert.deepEqual(permute([]), [ [] ]);
  assert.deepEqual(permute([1]), [ [ 1 ] ]);
  assert.deepEqual(
    permute([1,2,3]), 
    [
      [ 1, 2, 3 ],
      [ 1, 3, 2 ],
      [ 2, 1, 3 ],
      [ 2, 3, 1 ],
      [ 3, 1, 2 ],
      [ 3, 2, 1 ]
    ]
  );
}

module.exports.main = main;
