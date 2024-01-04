# 49. Group Anagrams

Link: https://leetcode.com/problems/group-anagrams/

|   Date   | Language | Level  | Difficulty | Duration |       TC        |    SC     |
| :------: | :------: | :----: | :--------: | :------: | :-------------: | :-------: |
| 1/4/2024 |    JS    | Medium |     2      |  15 min  | O(N \* k log k) | O(N \* k) |

<br>

## Notes

**1/4/2024** <br/>
Where N represents the length of the array and k represents the length of the characters. Since string lengths vary, we must also take that into consideration when accounting for space.

**6/13/2023** <br/>
In python we can reduce TC to O (n) by deriving a unique key for each anagram instead of sorting. In JS. this unique key can be created by converting array to a string
