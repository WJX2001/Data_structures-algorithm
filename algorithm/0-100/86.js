
/**
 * 分隔链表，给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 * 在合并两个有序链表时让你合二为一，而这里需要分解让你把原链表一分为二。具体来说，我们可以把原链表分成两个小链表，
 * 一个链表中的元素大小都小于 x，另一个链表中的元素都大于等于 x，最后再把这两条链表接到一起，就得到了题目想要的结果。
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    
    var dummy1 = new ListNode(-1)  // 存放小于x的节点
    var dummy2 = new ListNode(-1)  // 存放大于x的节点

    var p1 = dummy1,p2 = dummy2 // p1,p2指针负责生成结果链表
    var p = head   // p指针负责遍历原链表，最终将两个链表合并
     while (p !== null) {
        if (p.val >= x) {
            p2.next = p;
            p2 = p2.next;
        } else {
            p1.next = p;
            p1 = p1.next;
        }
        // 断开原链表中的每个节点的 next 指针 不让他乱指向
        var temp = p.next;
        p.next = null;
        p = temp;
    
       
    }

    // 连接两个链表
    p1.next = dummy2.next
    return dummy1.next
};

