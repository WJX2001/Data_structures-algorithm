// 删除排序链表中的重复元素 ，
// 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。

/**
 * 输入：head = [1,2,3,3,4,4,5]  
 * 输出：[1,2,5]
 * 
 * 输入：head = [1,1,1,2,3]
 * 输出：[2,3]
 * 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    // 创建虚拟头节点 dummy节点， 作为head的前置节点
    let dummy = new ListNode(-1);
    // 由于需要对链表进行增删操作，所以需要一个指针p来遍历
    let p = dummy;
    // q 指向原链表的head节点
    let q = head;

    // 循环遍历整个链表
    while(q !== null){
        if(q.next !=null && q.val === q.next.val) {
            // 发现重复节点，跳过这些重复节点
            while(q.next !=null && q.val === q.next.val){
                q = q.next
            }
            q = q.next // 此时q跳过了一段重复节点
            if(q === null){
                p.next = null
            }
            // 不过下一段元素也可能重复，等下一轮while循环 
        } else {
            // 不是重复节点，接到dummy后面
            p.next = q;
            p = p.next
            q = q.next
        }   
    }
    return dummy.next

}

// TODO: 用递归思想去做

var deleteDuplicates = function(head) {
    if(head === null || head.next === null){
        return head
    }
    if(head.val !== head.next.val){
        // 如果头节点和身后节点的值不同，则对之后的链表去重即可
        head.next = deleteDuplicates(head.next)
        return head
    }
    // 如果头节点和身后节点的值相同，则说明从head开始存在若干重复节点
    // 越过重复节点，找到head之后那个不重复的节点
    while(head.next !==null && head.val === head.next.val){
        head = head.next
    }
    // 直接返回那个不重复节点开头的链表的去重结果，就把重复节点删掉了
    return deleteDuplicates(head.next)
};

