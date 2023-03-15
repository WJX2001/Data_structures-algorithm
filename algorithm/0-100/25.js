// k个一组 反转链表
/** 
 * 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
 * k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]

输入：head = [1,2,3,4,5], k = 3
输出：[3,2,1,4,5]
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(!head) return null;
    // 区间[a,b) 包含k个待反转元素
    let a = head,b = head
    for(let i=0;i<k;i++) {
        // 不足k个 不需要反转 base case
        if(!b) return head
        b = b.next;
    }
    // 反转前k个元素
    let newHead = reverse(a,b);
    // 递归反转后续链表并连接起来
    a.next = reverseKGroup(b,k)
    return newHead

}
/**反转区间 [a,b)的元素，注意是左闭右开 */
var reverse = function(a,b){
    let pre = null
    let cur = a,nxt = a
    
    // while的终止条件改一下就可以了
    while(cur !== b){
        nxt = cur.next
        cur.next = pre
        pre = cur
        cur = nxt;
    }
    // 返回反转后的头节点
    return pre

}