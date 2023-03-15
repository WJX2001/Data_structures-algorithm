/**
 * 给你一个混合字符串 s ，请你返回 s 中 第二大 的数字，如果不存在第二大的数字，请你返回 -1 。
 * 混合字符串 由小写英文字母和数字组成。
 * 
 * 输入：s = "dfa12321afd"
   输出：2
   解释：出现在 s 中的数字包括 [1, 2, 3] 。第二大的数字是 2 。

 * 输入：s = "abc1111"
   输出：-1
   解释：出现在 s 中的数字只包含 [1] 。没有第二大的数字。
 */


var secondHighest = function(s) {
    let first = -1 
    let second = -1
    for(let i=0;i<s.length;i++) {
        let c = s[i]
        if('0' < c && c<'9') {
            const num = c.charCodeAt() - '0'.charCodeAt()
            if(num > first) {
                second = first
                first = num
            } else if(num <first && num > second) {
                second = num
            }
        }
    }
    return second
}
