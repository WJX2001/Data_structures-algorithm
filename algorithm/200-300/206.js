

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
var reverseList = function(head) {
    var reverseList = function(head) {
    let prev = null, curr = head
    while (curr) {

        // 定义当前节点的下一个节点为 next
        const next = curr.next
        curr.next = prev  // 当前节点的下一个节点 指向为前一个节点
        prev = curr       // 将前一个节点向前推动，放到当前节点的位置
        curr = next       // 将当前节点向后推动  null->1->2->3->4->5
                        /**
                            当前prev指向null
                               curr指向 1
                               然后向前推进
                               prev 指向1 curr指向2 不停向前迭代
                         */
    }
    return prev
}
}