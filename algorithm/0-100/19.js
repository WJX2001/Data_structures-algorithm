/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 输入：head = [1,2,3,4,5], n = 2
   输出：[1,2,3,5]
 * 
 * 
 * 输入：head = [1], n = 1
 * 输出：[]
 * 
 * 输入：head = [1,2], n = 1
 * 输出：[1]
 * 
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
 * @param {number} n
 * @return {ListNode}
 */  


// TODO: 返回链表中倒数第K个节点
/**
 * 假设K=2，我们先让一个指针P1指向链表的头节点head ，然后走K步
 * 这时的P1只要再走n-K步，就会走到链表末尾的空指针
 * 此时，我们再用一个指针指向链表头节点 head
 * 接下来，让 p1 p2 同时向前走，当p1走到链表末尾null的时候，走了 n-k步，p2也走了n-k步
 * 这时的p2 停留在n-k+1那个节点上 ，刚好是倒数第k个节点
 * 这样，我们就实现了 遍历一次获得倒数第K个节点
 * 而且，此种方法的复杂度 o(N)
 */
var findFromEnd = function(head, k) {
    var p1 = head;
    // p1先走k步
    for(let i=0;i<k;i++) {
        p1 = p1.next
    }
    // 此时 p2登场
    var p2 = head;
    
    while(p1 !=null){  // 经过while后，p1和p2同时走了n-k步
        p2 = p2.next
        p1 = p1.next
    }
    // 此时p2 指向n-k+1 个节点，即倒数第k个节点
    return p2;
}

// 上面是准备工作，此时我们正式开始 删除倒数第N个节点
var removeNthFromEnd = function(head, n) {
    // 虚拟头节点
    var dummy = new ListNode(-1)
    dummy.next = head
    // 删除第n个节点，首先找到第n+1个节点
    var x = findFromEnd(dummy,n+1)  // 调用上面封装好的函数
    // 删除倒数第n个节点
    x.next = x.next.next
    return dummy.next


};

// 这里我们又使用了虚拟头节点的技巧： TODO: 防止出现空指针的现象
/**
 * 例如： 5个节点，就让你删除倒数第5个节点，也就是第一个节点，按照算法逻辑，我们应该先找到倒数第6个节点
 * 但是第一个节点前面已经没有节点了，这时就会出错
 * 但是如果我们使用了虚拟节点dummy，就避免这个问题
 */