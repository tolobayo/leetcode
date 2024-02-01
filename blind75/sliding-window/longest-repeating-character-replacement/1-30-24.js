var characterReplacement = function (s, k) {
  const letterCount = {};
  let l = 0;
  let maxR = 0;

  for (let r = 0; r < s.length; r++) {
    letterCount[s[r]] = 1 + (letterCount[s[r]] || 0);
    const max = Math.max(...Object.values(letterCount));
    if (r - l + 1 - max > k) {
      letterCount[s[l]] = letterCount[s[l]] - 1;
      l++;
    }
    maxR = Math.max(maxR, r - l + 1);
  }
  return maxR;
};
