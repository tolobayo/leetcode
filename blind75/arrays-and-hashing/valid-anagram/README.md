# 242. Valid Anagrams

Link: https://leetcode.com/problems/valid-anagram/

|   Date    | Language | Level | Difficulty | Duration |  TC  |  SC  |
| :-------: | :------: | :---: | :--------: | :------: | :--: | :--: |
| 1/2/2024  |    JS    | Easy  |     3      | 30+ min  | O(n) | O(1) |
| 7/11/2024 |    JS    | Easy  |     1      |  25 min  | O(n) | O(1) |

<br>

## Notes

**6/12/2023** <br/>
It is possible to complete this solution without sorting by keeping track of the occurence of each letter. You would first need to check if the words are the same length. Then iterate through length of the word, logging all occurences in wordS as +1 and in wordT as -1 . Then iterate through your map (array in this case) and check if each element is equal to zero. This solution has TC:O(n) SC:O(1). In JS, you might want to use local compare for strings of different languages
