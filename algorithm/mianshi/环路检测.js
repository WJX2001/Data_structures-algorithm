/** 
给定一个链表，如果它是有环链表，实现一个算法返回环路的开头节点。若环不存在，请返回 null。
如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
*/

var detectCycle = function(head) {
    var fast,slow
    fast = slow = head
    while(fast!=null && fast.next!=null){
        fast = fast.next.next
        slow = slow.next
        if(fast == slow) break;
    } 

    // 判断是否有环
    if(fast ==null && fast.next == null){
        return null
    }

    // 让慢指针重新指向头节点
    slow = head
    // 快慢指针同步前进，相交点就是环起点
    while(slow != null){
        fast = fast.next
        slow = slow.next
    }
    return slow
} 

/**
 * TODO: 原理解析：
 * 1. 我们假设快慢指针相遇时，慢指针 slow 走了 k 步，那么快指针 fast 一定走了 2k 步：
 * 2. fast 一定比 slow 多走了 k 步，这多走的 k 步其实就是 fast 指针在环里转圈圈，所以 k 的值就是环长度的「整数倍」。
 * 3. 假设相遇点距环的起点的距离为 m，那么结合上图的 slow 指针，环的起点距头结点 head 的距离为 k - m，也就是说如果从 head 前进 k - m 步就能到达环起点。
 * 4. 巧的是，如果从相遇点继续前进 k - m 步，也恰好到达环起点。因为结合上图的 fast 指针，从相遇点开始走k步可以转回到相遇点，那走 k - m 步肯定就走到环起点了：
 * 
 * 
 */