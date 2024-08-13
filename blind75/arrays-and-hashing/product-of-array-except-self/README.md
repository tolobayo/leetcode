# 238. Product of Array Except Self

Link: https://leetcode.com/problems/product-of-array-except-self/

|   Date    | Language | Level  | Difficulty | Duration |  TC  |  SC  |
| :-------: | :------: | :----: | :--------: | :------: | :--: | :--: |
| 1/22/2024 |    JS    | Medium |     5      | 30+ min  |  -   |  -   |
| 8/13/2024 |    JS    | Medium |     4      |    -     | O(n) | O(n) |

<br>

## Notes

**6/15/2023** <br/>
Use two arrays to keep track of progressive product. Multiply half before value time half after value to get the product of all other numbers

**1/22/2024** <br/>
Possible to complete in one pass by using incrementer AND decrementer (two variables within the loop)
