var reverseList = function(head) {
    if(head === null || head.next === null){
        return head
    }
    var last = reverseList(head.next)
    head.next.next = head
    head.next = null
    return last
};