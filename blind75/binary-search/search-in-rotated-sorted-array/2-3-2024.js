/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let [l, r, res] = [0, nums.length - 1, -1];

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (nums[m] === target) {
      res = m;
      break;
    } else if (nums[l] <= nums[m]) {
      //if midpoint is in the sorted portion
      if (target > nums[m] || target < nums[l]) l = m + 1;
      else r = m - 1;
    } else {
      //if midpoint in unsorted portion
      if (target < nums[m] || target > nums[r]) r = m - 1;
      else l = m + 1;
    }
  }
  return res;
};
