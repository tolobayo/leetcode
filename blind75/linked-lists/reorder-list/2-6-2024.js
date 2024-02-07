/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  //find midpoint
  let [slow, fast] = [head, head.next];
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //reverse second half of list
  let start = slow.next;
  let prev = null;
  slow.next = null; //clip end of list
  while (start) {
    //switch directions
    let tmp = start.next;
    start.next = prev;
    //shift pointers down
    prev = start;
    start = tmp;
  }

  //merge the lists
  let [first, second] = [head, prev];
  while (second) {
    let [tmp1, tmp2] = [first.next, second.next];
    first.next = second;
    second.next = tmp1;
    first = tmp1;
    second = tmp2;
  }
};
