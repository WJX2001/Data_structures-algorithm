// 判断是否为环形链表
var hasCycle = function(head) {
    var fast = head
    var slow = head
    while(fast != null && fast.next !=null){
        fast = fast.next.next
        slow = slow.next
        if(slow === fast){
            return true
        }

    }
    return false
}