var addTwoNumbers = function(l1, l2) {
    // 在两条链表上的指针
    let p1 = l1,p2 = l2
    // 虚拟头节点（构建新链表时的常用技巧）
    let dummy = new ListNode(-1)
    // 指针p负责构建新链表
    let p = dummy
    // 记录进位
    let carry = 0
    // 开始执行加法，两条链表走完且没有进位的时候才能结束循环
    while(p1 !==null || p2!==null || carry>0){
        // 先加上上次的进位
        let val = carry;
        if(p1 !== null){
            val += p1.val
            p1 = p1.next
        }
        if(p2 !== null){
            val += p2.val
            p2 = p2.next
        }
        // 处理进位的情况
        carry = Math.floor(val /10);
        val = val %10

        // 构建新节点
        p.next = new ListNode(val)
        p = p.next
    }
    // 返回结果链表的头节点（去除虚拟头节点）
}