// 链表的中间节点
// 给你单链表的头结点 head ，请你找出并返回链表的中间结点。

// TODO: 单链表中点问题
/**
 * 每当慢指针slow前进一步，快指针fast就前进两步，这样，当fast走到链表末尾的时候，慢指针正好走到终点
 */


/**
 * 快慢指针初始化指向 head
 * 快指针走到末尾时停止
 * 慢指针走一步，快指针走两步
 * 慢指针指向中点
 */
var middleNode = function(head) {
    var slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

/**
 * 需要注意的是，如果链表长度为偶数，也就是说中点有两个的时候，我们这个解法返回的节点是靠后的那个节点。
 */