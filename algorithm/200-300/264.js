// 给你一个整数n 请你找出并返回n个丑数
// 丑数 就是只包含质因数 2、3 和/或 5 的正整数。

// 输入：n = 10
// 输出：12
// 解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。

// 输入：n = 1
// 输出：1
// 解释：1 通常被视为丑数。

var nthUglyNumber = function(n) {
    // 三个指向有序链表头节点的指针
    let p2=1,p3=1,p5=1
    // 三个有序链表的头节点的值
    let product2 = 1,product3 = 1,product5 = 1;
    // 理解为最终合并的有序链表（结果链表）
    let ugly = new Array(n+1);
    //  合并链表的指针
    let p = 1

    // 开始合并三个链表
    while(p<=n){
        // 取三个链表上的最小节点
        let min  = Math.min(Math.min(product2,product3),product5)
        // 接到结果链表上
        ugly[p] = min;
        p++;
        // 前进对应有序链表上的指针
        if(min === product2){
            product2 = 2*ugly[p2];
            p2++
        }
        if(min === product3){
            product3 = 3*ugly[p3];
            p3++
        }
        if(min === product5){
            product5 = 5*ugly[p5]
            p5++
        }
    }
    // 返回第n个丑数
    return ugly[n]
}