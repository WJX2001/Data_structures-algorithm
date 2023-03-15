// 验证回文串
/**如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。

字母和数字都属于字母数字字符。

给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。
*/

/** 
 * 输入: s = "A man, a plan, a canal: Panama"
输出：true
解释："amanaplanacanalpanama" 是回文串。
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 先把所有字符转化为小写，并过滤掉空格和标点这类字符
    let sb = ""
    for(let i=0;i<s.length;i++) {
        let c = s.charAt(i)
        if(/[a-zA-Z0-9]/.test(c)){
            sb += c.toLowerCase();
        }

    }
    // 然后对剩下的这些目标字符执行双指针算法，判断回文串
    s = sb
    // 一左一右两个指针相向而行
    let left = 0
    let right = s.length-1
    while(left<right){
        if(s.charAt(left) != s.charAt(right)){
            return false
        }
        left++
        right--
    }
    return true
};