/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode();
  dummy.next = head;

  let l = dummy,
    r = head;

  for (let i = 0; i < n; i++) r = r?.next;

  while (r) {
    l = l.next;
    r = r.next;
  }

  l.next = l.next.next;

  return dummy.next;
};
