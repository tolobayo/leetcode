/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //Brute force - check every other element for target TC: 0(n^2)
  // Map - store values needed for target TC: 0(n)
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    let need = target - nums[i];
    if (seen[need] !== undefined) return [seen[need], i];
    seen[nums[i]] = i;
  }
};
