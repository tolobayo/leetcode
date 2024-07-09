/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // for each num, check every other value T: O(n2) S: O(1)
  // use a set to check if value previously exits T: O(n) S: O(n)
  const cache = new Set();
  for (num of nums) {
    if (cache.has(num)) return true;
    cache.add(num);
  }
  return false;
};
