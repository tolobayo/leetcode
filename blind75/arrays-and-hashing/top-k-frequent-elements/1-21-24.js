/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // TC: n log n, SC: n
  const freq = {};

  for (let i = 0; i < nums.length; i++) {
    if (freq[nums[i]]) freq[nums[i]]++;
    else freq[nums[i]] = 1;
  }

  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((n) => +n[0]);
};
