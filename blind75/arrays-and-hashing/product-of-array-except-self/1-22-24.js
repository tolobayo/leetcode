/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const output = Array(nums.length);
  let pre = 1,
    post = 1;

  for (let i = 0; i < nums.length; i++) {
    output[i] = pre;
    pre *= nums[i];
  }
  for (let j = nums.length - 1; j >= 0; j--) {
    output[j] *= post;
    post *= nums[j];
  }

  return output;
};
