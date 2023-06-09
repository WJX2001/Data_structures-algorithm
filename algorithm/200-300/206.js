

// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]
/**
 * 输入：head = [1,2]
   输出：[2,1]
 */

/**
 * 输入：head = []
   输出：[]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // case base
  if (head === null || head.next === null) {
    return head
  }
  var last = reverseList(head.next);
  head.next.next = head
  head.next = null
  return last
}