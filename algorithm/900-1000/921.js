// 使括号有效的最少添加
/**
 * 输入：s = "())"
 * 输出：1
 * 
 * 输入：s = "((("
 * 输出：3
 */
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    // res记录插入的次数
    let res = 0
    // need变量记录右括号
    let need = 0
    // 遍历字符串 
    for(let i=0;i<s.length;i++) {
        if(s.charAt(i) == '('){
            // 对右括号的需求 +1
            need++
        }
        if(s.charAt(i) == ')') {
            // 对右括号的需求-1
            need --;
            if(need =-1){
                need = 0
                res++
            }
        }
    }
    return res + need
}