/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const substr = new Set();
  let l = 0,
    max = 0;

  for (let r = 0; r < s.length; r++) {
    while (substr.has(s[r])) {
      substr.delete(s[l]);
      l++;
    }
    substr.add(s[r]);
    max = Math.max(substr.size, max);
  }
  return max;
};
