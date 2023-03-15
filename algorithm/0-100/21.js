// 合并两个有序链表
/**
 * 采用虚拟头节点的方式进行，
 * 1. 创建一个虚拟头节点p, 两个链表就像拉链两侧的锯齿 。 p就像拉链的拉索
 * 2. 通过比较拉链两侧的锯齿，将小一些的放在中间的拉索上
 * 3.创造头节点的时机： 当你需要创建一个新链表的时候
 */





/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // 虚拟头节点
    var dummy = new ListNode(-1),p=dummy
    var p1 = list1
    var p2 = list2
   while (p1 !== null && p2 !== null){
        // 比较p1 和 p2两个指针
        // 将值较小的节点接到p指针
        if(p1.val > p2.val){
            p.next = p2
            p2 = p2.next
        } else{
            p.next = p1;
            p1 = p1.next
        }
        // 指针不断前进
        p = p.next
    }
    if(p1 !== null){
        p.next = p1
    }
    if(p2 !=null) {
        p.next = p2
    }
    return dummy.next


};