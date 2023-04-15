var partition = function(head, x) {

    var dummy1 = new ListNode(-1)
    var dummy2 = new ListNode(-1)
    var p1 = dummy1,p2 = dummy2

    var p = head
    while(p!==null) {
        if(p.val>=x) {
            p2.next = p
            p2 = p2.next
        }else {
            p1.next = p
            p1 = p1.next
        } 

        // 断开原链表中的每个节点的next 指针
        let temp = p.next
        p.next = null
        p = temp
    }
    // 连接两个链表
    p1.next = dummy2.next
    return dummy1.next
};