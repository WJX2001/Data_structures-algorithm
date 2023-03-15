// 删除排序链表中的重复元素
// 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
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
var deleteDuplicates = function(head) {
    if(head === null) return null
    let fast = head
    let slow = head
    while(fast != null){
        if(slow.val !== fast.val){
            slow.next = fast
            slow = slow.next
        }
        fast = fast.next
    } 
    // 断开与后面重复元素的连接
    slow.next = null
    return head

}