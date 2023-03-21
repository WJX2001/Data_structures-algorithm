// 最长有效括号
// 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

// 输入：s = "(()"
// 输出：2
// 解释：最长有效括号子串是 "()"

// 输入：s = ")()())"
// 输出：4
// 解释：最长有效括号子串是 "()()"

var longestValidParentheses = function(s) {
    let stk = []
    // dp[i]的定义，记录以s[i-1]结尾的最长合法括号子串长度
    let dp = new Array(s.length+1).fill(0);
    for(let i=0;i<s.length;i++) {
        if(s.charAt(i) === '('){
            // 遇到左括号，记录索引
            stk.push(i)
            // 左括号不可能是合法括号子串的结尾; 因为s[i-1]对应dp[i];所以s[i]对应dp[i+1]
            dp[i+1] = 0
        } else {
            // 遇到右括号
            if(stk.length > 0) {
                // 配对的左括号对应索引
                let leftIndex = stk.pop()
                // 以这个右括号结尾的最长子串长度
                let len = 1+i-leftIndex +dp[leftIndex] // 此时的dp[leftIndex]相当于dp[i-1]
                dp[i+1] = len
            } else {
                // 没有配对的左括号
                dp[i+1] = 0
            }
        }
    }
    // 计算最长子串的长度
    let res = 0
    for(let i=0;i<dp.length;i++) {
        res = Math.max(res,dp[i])
    }
    return res
}