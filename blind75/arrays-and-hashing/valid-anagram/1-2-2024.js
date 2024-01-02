/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // Brute force - for each letter check other string O(n^2)

  // Sort - sort each string and compare for equality O(n log n)

  // Serialize strings - convert str into letter count code and compare O(n)

  if (s.length !== t.length) return false;
  const letterFreq = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    firstIndex = s[i].toLowerCase().charCodeAt() % 97;
    secondIndex = t[i].toLowerCase().charCodeAt() % 97;

    letterFreq[firstIndex] = letterFreq[firstIndex] + 1;
    letterFreq[secondIndex] = letterFreq[secondIndex] - 1;
  }
  for (let i = 0; i < letterFreq.length; i++) {
    if (letterFreq[i] !== 0) return false;
  }
  return true;
};
