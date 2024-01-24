class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    // let str = ''
    // for (let i = 0; i < strs.length; i++) {
    //     str += `_S${strs[i].length}E_${strs[i]}`
    // }
    // console.log(str)
    // return str
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    // const list = []
    // let i = 0
    // while (i < str.length) {
    //     const start = str[i] + str[i + 1]
    //     if (start != '_S') return
    //     const letterLen = this.getLength(str, i + 2)
    //     const codeLen = letterLen.length + 4 //For starting and ending chars
    //     list.push (str.slice(codeLen + 1, letterLen + 1))
    //     i += codeLen + letterLen
    // }
    // console.log(list)
    // return list
  }
  // getLength(str, start) {

  //     let num = ''
  //     let i = start //Skip start code
  //     while (str[i] !== 'E'){
  //         num += str[i]
  //         i++
  //     }
  //     return +num
  // }
}
