// 两两交换链表中的节点

var swapPairs = function(head) {
    if(head == null && head.next == null){
        return head
    }
    let first = head
    let second = head.next
    let others = head.next.next

    // 先交换前两个节点
    second.next = first
    // 利用递归，继续将剩下的链表节点两两反转
    first.next = swapPairs(others)
    // 现在整个链表都成功反转了 ，返回新的头节点
    return second

}