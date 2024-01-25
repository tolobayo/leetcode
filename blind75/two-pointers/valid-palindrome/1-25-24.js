/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let word = "";
  let reversedWord = "";

  for (let char of s) {
    const code = char.charCodeAt(0);
    if (
      (code >= 65 && code <= 65 + 25) ||
      (code >= 97 && code <= 97 + 25) ||
      (code > 47 && code < 58)
    ) {
      word += char.toLowerCase();
      reversedWord = char.toLowerCase() + reversedWord;
    }
  }

  return word === reversedWord;
};
