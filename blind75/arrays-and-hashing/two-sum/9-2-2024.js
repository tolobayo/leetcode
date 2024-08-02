/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //for each value, check every other value - T: O(n2) S: 1
  //store needed value in cache, check for match - T: O(n) S: O(n)

  const cache = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (cache.has(num)) return [cache.get(num), i];
    else cache.set(target - num, i);
  }
};
