// 有效的括号
/**
 *  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    每个右括号都有一个对应的相同类型的左括号。

输入：s = "()[]{}"
输出：true
输入：s = "(]"
输出：false
*/
var isValid = function(str) {
    // 建立一个栈
    let left = []
    // 遍历字符串中的每一个字符
    for(let c of str){
        // 如果是左括号，则入栈
        if(c == '{' || c == '(' || c == '['){
            left.push(c)
        } else { // 字符c是右括号
            // 如果栈不为空，而且最近入栈的左括号可以匹配，则出栈
            if(left.length && leftof(c) == left[left.length-1]){
                left.pop()
            } else {
                // 和最近的符号不匹配
                return false
            }
        }
    }
    return !left.length
}

function leftof(c){
    if(c == '}') return '{'
    if(c == ']') return '['
    return '('
}