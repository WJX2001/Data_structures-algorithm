// 平衡括号字符串的最少插入次数 （一个左括号对应两个右括号）
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    // res记录插入的值
    let res = 0
    // need记录对右括号的需求量
    let need = 0
    // 遍历字符串
    for(let i=0;i<s.length;i++) {
        if(s.charAt(i) == '('){
            need +=2
        // 如果此时的need是奇数，一个左括号对应着两个右括号,所以右括号数量必须为偶数
            if(need %2 ===1) {
                // 插入一个右括号
                res++
                // 对右括号需求量-1 这样两个变量和才能平衡
                need --
            }
        }
        if(s.charAt(i) == ')'){
            need --
            if(need == -1){
                // 需要插入一个左括号
                res+=
                // 同时对右括号的需求变为1
                need = 1
            }
        }
    }
    return res+need
}