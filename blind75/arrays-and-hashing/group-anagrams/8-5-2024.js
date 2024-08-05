/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // sort, store according to key T: O(n log n) S: O(n)
  // manually generate key, store according to key: T: O(n * m) S: 0(n)

  const anagrams = new Map();

  const generateKey = (word) => {
    const key = Array(26).fill(0);
    [...word].forEach((letter) => (key[letter.charCodeAt(0) % 97] += 1));
    return key.toString();
  };

  for (let word of strs) {
    const key = generateKey(word);
    if (anagrams.has(key)) {
      const previous = anagrams.get(key);
      previous.push(word);
      anagrams.set(key, previous);
    } else anagrams.set(key, [word]);
  }

  return Array.from(anagrams, ([key, values]) => values);
};
