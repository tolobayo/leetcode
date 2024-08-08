/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  //count occurances - iterate through to find the k top numbers or sort T: O(n2) | O(n log n) S: O(n)
  //use bucket sort T: O(n) S: O(n)

  const count = {};
  const frequency = Array(nums.length);
  const result = [];

  for (let num of nums) {
    if (count[num]) count[num] += 1;
    else count[num] = 1;
  }
  console.log(count);

  for (let [key, value] of Object.entries(count)) {
    if (frequency[value]) frequency[value] = [...frequency[value], key];
    else frequency[value] = [key];
  }

  for (let group of frequency.reverse()) {
    if (!group) continue;
    for (let num of group) {
      result.push(num);
      if (result.length === k) return result;
    }
  }
};
