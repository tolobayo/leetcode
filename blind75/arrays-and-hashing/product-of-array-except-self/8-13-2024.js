/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // for each element, find product of all other elements T: O(n2) S: O(n)
  //compute prefix and postfix products by iterating forward and backward T: O(n) S: O(n) or O (1)

  const result = [];
  let pre = 1;
  let post = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = pre;
    pre *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= post;
    post *= nums[i];
  }

  return result;
};
