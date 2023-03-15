// 合并K个升序链表
// 给你一个链表数组，每个链表都已经按升序排列。请你将所有链表合并到一个升序链表中，返回合并后的链表。

/**输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
*/
var mergeKLists = function(lists) {
    const temp = []
    if(lists.length === 0) return null;
    for(i = 0;i<lists.length;i++) {
        while(lists[i]) {
            temp.push(lists[i].val)   // 遍历所有的链表 将其放入数组中
            lists[i] = lists[i].next;
        }
    }

    if(temp.length === 0) return null  // 判断数组的边界条件
    temp.sort((a,b) => a-b)            // 将数组由小到大排列

    let dummy = new ListNode(temp[0])
    let p = dummy
    for(let i=0;i<temp.length;i++) {
        p.next = new ListNode(temp[i])   // 组成新的链表
        p = p.next
    }
    return dummy.next


}

/**
 * 优先队列 pq 中的元素个数最多是 k，所以一次 poll 或者 add 方法的时间复杂度是 O(logk)；
 * 所有的链表节点都会被加入和弹出 pq，所以算法整体的时间复杂度是 O(Nlogk)，其中 k 是链表的条数，N 是这些链表的节点总数。
 */