// 从未排序的链表中移除重复元素
/**
 * 给定一个链表的第一个节点 head ，找到链表中所有出现多于一次的元素，并删除这些元素所在的节点。
 * 返回删除后的链表。
 */

// 输入: head = [1,2,3,2]
// 输出: [1,3]
// 解释: 2 在链表中出现了两次，所以所有的 2 都需要被删除。删除了所有的 2 之后，我们还剩下 [1,3] 。

// 输入: head = [2,1,1,2]
// 输出: []
// 解释: 2 和 1 都出现了两次。所有元素都需要被删除。

var deleteDuplicatesUnsorted = function(head) {
    var count = new Map()
    // 先遍历一遍链表，并且记录每个值出现的次数
    var p = head
    while(p!==null){
        count.set(p.val,(count.get(p.val)||0)+1)
        p = p.next
    }
    // 虚拟头节点（哨兵节点）存放结果链表
    let dummy = new ListNode(-1)
    dummy.next = head

    // 再遍历一遍节点，把重复出现的节点剔除掉
    p = dummy
    while(p!==null){
        // unique指针负责找不重复的节点
        var unique = p.next
        while(unique !== null && count.get(unique.val)>1){
            // 跳过重复节点
            unique = unique.next
        }
        // 接入不重复的节点 或者尾部的空指针
        p.next = unique
        // p前进，继续寻找不重复的节点
        p = p.next
    }
    return dummy.next
}