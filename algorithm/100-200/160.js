// 相交链表

// p1 和 p2 分别在两条链表上走，并不能同时走到公共节点,也就不能得到相交节点
// 解决这个问题的关键是如何让 p1和p2同时到达相交节点

/**
 * TODO: 我们可以让p1 遍历完链表a之后 继续遍历链表b, 让p2 遍历完链表b后，同时遍历链表a
 * 这样相当于「逻辑上」两条链表接在了一起。
 * 
 * 假设 a: a1 -> a2 -> c1 -> c2
 * 假设 b: b1 -> b2 -> b3 -> c1 -> c2
 * 
 * 通过处理后 :
 *     a: a1 -> a2 -> c1 -> c2 |继续下个链表 -> b1 -> b2 -> b3 -> c1
 *     b: b1 -> b2 -> b3 -> c1 -> c2 |继续下个链表 -> a1 -> a2 -> c1
 * 这样就可以达到同时到达c1的情况了
 */


function getIntersectionNode(headA, headB) {
    var p1  = headA
    var p2  = headB
    while(p1 !=p2) {
        if(p1 == null){
            p1 = headB
        }else {
            p1 = p1.next
        }
        if(p2 == null){
            p2 = headA
        }else {
            p2 = p2.next
        }
    }
    return p1
}

// 空间复杂度O(1)，时间复杂度为 O(N)。