var mergeTwoLists = function(list1, list2) {
    // 虚拟头节点
    let dummy = new ListNode(-1),p = dummy
    let p1 = list1,p2 = list2

    while(p1 !== null && p2 !== null){
        if(p1.val>p2.val) {
            p.next = p2
            p2 = p2.next
        } else {
            p.next = p1
            p1 = p1.next
        }
        // p 指针不断向前
        p = p.next
    }
    if(p1 !==null) {
        p.next = p1
        p1 = p1.next
    }

    if(p2!== null){
        p.next = p2
        p2 = p2.next
    }
    return dummy.next
};