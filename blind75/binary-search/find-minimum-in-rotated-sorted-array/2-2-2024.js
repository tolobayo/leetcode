/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let [l, r, min] = [0, nums.length - 1, nums[0]];

  while (l <= r) {
    if (nums[l] < nums[r]) {
      min = Math.min(min, nums[l]);
      break;
    }

    let m = Math.floor((l + r) / 2);
    min = Math.min(min, nums[m]);
    if (nums[m] >= nums[r]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return min;
};
