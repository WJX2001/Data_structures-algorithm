var reverseBetween = function(head, left, right) {
    if(left === 1){
        // 反转以head开头的n个节点
        return reverseN(head,right)
    }
    // 将head.next 作为起点
    head.next = reverseBetween(head.next,left-1,right-1)
    return head
};

// 后驱节点
var successor = null
// 反转以 head 为起点的n个节点，返回新的头节点
var reverseN = function(head,n){
    if(n === 1){
        // 记录第n+1个节点
        successor = head.next
        return head
    }

    // 以head.next为起点，需要反转前n-1个节点
    var last = reverseN(head.next,n-1)
    head.next.next = head
    head.next = successor
    return last
}