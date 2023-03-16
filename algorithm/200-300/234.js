// 回文链表
// 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
// 输入：head = [1,2,2,1]
// 输出：true
// 输入：head = [1,2]
// 输出：false

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head
    let fast = head
    while(fast!=null && fast.next !=null) {
        slow = slow.next
        fast = fast.next
    }
    // 如果fast 指针没有指向Null 说明链表长度为奇数 slow还有再向前一步
    if(fast !=null) {
        slow = slow.next
    }
    let left = head
    let right = reverse(slow)
    while(right !==null) {
        if(left.val !== right.val) {
            return false
        }
        left = left.next
        right = right.next
    }
    return true

}

function reverse(head){
    let pre = null
    let cur = head
    let nxt = head
    while(cur !=null){
        nxt = cur.next
        cur.next = pre
        pre = cur
        cur = nxt
    }
    return pre
}