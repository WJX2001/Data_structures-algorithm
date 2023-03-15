// 合并两个排序的链表
// 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

var mergeTwoLists = function(l1, l2) {
    // 虚拟头节点
    let dummy = new  ListNode(-1), p = dummy;
    let p1 = l1,p2 = l2

    while(p1 != null && p2 !=null) {
        // 比较p1 p2 两个指针
        // 将值较小的节点加入到p节点
        if(p1.val > p2.val){
            p.next = p2
            p2 = p2.next
        } else {
            p.next = p1
            p1 = p1.next
        }
        // p指针不断前进
        p = p.next
    }

    if (p1 != null) {
        p.next = p1;
    }

    if (p2 != null) {
        p.next = p2;
    }

    return dummy.next;

}