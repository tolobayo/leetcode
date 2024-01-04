/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // store each anagram in map (derive by sort) TC: n log n
  const list = {};
  for (let str of strs) {
    const code = [...str].sort().join("");
    if (list[code]?.length) {
      group = list[code];
      group.push(str);
      list[code] = group;
    } else {
      list[code] = [str];
    }
  }
  return Object.values(list);
};
