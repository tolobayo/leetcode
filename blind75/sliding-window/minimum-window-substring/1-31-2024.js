/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let freq = new Map();
  let [l, r, len, min] = [0, 0, Infinity, ""];

  for (let char of t) {
    freq.has(char) ? freq.set(char, freq.get(char) + 1) : freq.set(char, 1);
  }
  let count = freq.size;

  while (r < s.length) {
    if (freq.has(s[r])) {
      const newValue = freq.get(s[r]) - 1;
      freq.set(s[r], newValue);
      if (newValue === 0) count--;
    }
    r++;

    while (count === 0) {
      if (r - l < len) {
        min = s.slice(l, r);
        len = r - l;
      }
      if (freq.has(s[l])) {
        const newValue = freq.get(s[l]) + 1;
        freq.set(s[l], newValue);
        if (newValue > 0) count++;
      }
      l++;
    }
  }
  return min;
};
