// 判断链表是否有环，如果有的话请返回起点
var detectCycle = function(head) {
    let fast = head
    let slow = head
    while(fast !==null && fast.next!== null){
        fast = fast.next.next
        slow = slow.next
        if(fast === slow) break
    }
    if(fast === null || fast.next === null){
        return null
    }

    slow = head
    while(slow !== fast){
        slow = slow.next
        fast = fast.next
    }
    return slow
};