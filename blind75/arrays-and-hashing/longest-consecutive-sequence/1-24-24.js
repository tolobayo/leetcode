/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const catalog = new Set(nums);
  let longest = 0;
  for (let n of nums) {
    if (!catalog.has(n - 1)) {
      let i = n;
      let count = 0;
      while (catalog.has(i)) {
        count++;
        i++;
      }
      if (count > longest) longest = count;
    }
  }
  return longest;
};
