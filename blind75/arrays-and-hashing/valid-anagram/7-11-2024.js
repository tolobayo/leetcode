/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // check if strings are different lengths - return false if arent
  // count all the letters in each string (store in maps), compare contents T: O(n) S: O(n)
  // create key for each letter, compare keys T: O(n) S: O(1)

  if (s.length !== t.length) return false;

  const maxLength = Math.max(s.length, t.length);
  let sKey = Array(26).fill(0);
  let tKey = Array(26).fill(0);

  for (let i = 0; i < maxLength; i++) {
    if (s[i]) {
      const index = s[i].charCodeAt(0) % 97;
      sKey[index] += 1;
    }
    if (t[i]) {
      const index = t[i].charCodeAt(0) % 97;
      tKey[index] += 1;
    }
  }

  return sKey.toString() === tKey.toString();
};
