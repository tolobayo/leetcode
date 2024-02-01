/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const store = [];
  const valid = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let b of s) {
    const lastChar = store.at(-1);
    if (valid[lastChar] === b) store.pop();
    else store.push(b);
  }

  return store.length === 0;
};
