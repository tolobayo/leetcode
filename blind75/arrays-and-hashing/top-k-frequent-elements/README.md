# 347. Top K Frequent Elements

Link: https://leetcode.com/problems/top-k-frequent-elements/

|   Date    | Language | Level  | Difficulty | Duration |     TC     |  SC  |
| :-------: | :------: | :----: | :--------: | :------: | :--------: | :--: |
| 1/21/2024 |    JS    | Medium |     3      |  25 min  | O(n log n) | O(n) |
| 8/7/2024  |    JS    | Medium |     3      |    -     |    O(n)    | O(n) |

<br>

## Notes

**6/14/2023** <br/>
This solution takes advantage of the fact the arrs are inherently in sorted order. For example if we set a value at index 8 and another value at index 7, when we traverse the array we will arrive at those indexes in order 7 first and then 8

```js
var topKFrequent = function (nums, k) {
  const freqMap = new Map();
  const bucket = [];
  const result = [];

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  return result;
};
```
