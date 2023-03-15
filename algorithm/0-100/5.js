// 最长回文子串
/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
   如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

   输入：s = "babad"
   输出："bab"
   解释："aba" 同样是符合题意的答案。

   输入：s = "cbbd"
   输出："bb"
 */


   var longestPalindrome = function(s) {
    let res = ""
    for(let i=0;i<s.length;i++) {
        // 以s[i]为中心的最长回文子串
        let s1 = palindrome(s,i,i)         //TODO:输入相同的l和r 相当于寻找长度为奇数的回文串
        // 以s[i]和s[i+1]为中心的最长回文子串  // 输入相邻的l和r 相当于寻找长度为偶数的回文串
        let s2 = palindrome(s,i,i+1)
        // res = longest(res,s1,s2)
        res = res.length > s1.length ? res:s1
        res = res.length > s2.length ? res:s2
    }
    return res


    function palindrome(s,l,r){
        // 防止索引越界
        while(l>=0 && r<s.length && s.charAt(l) == s.charAt(r)){
            // 向两边展开
            l--;
            r++;
        }
        // 返回以s[l]和s[r]为中心的最长回文串
        return s.substring(l+1,r)
    }
};