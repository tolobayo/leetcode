/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const seen = new Set();
  for (let num of nums) {
    if (seen.has(nums[i])) {
      return true;
    }
    seen.add(nums[i]);
  }
  return false;
};
