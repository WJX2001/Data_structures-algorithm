// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let window = new Map()
    let left=0,right=0,res=0

    while(right<s.length){
        let c = s[right]
        right++
        if(window.has(c)){
            window.set(c,window.get(c)+1)
        }else {
            window.set(c,1)
        }

        // 判断左侧窗口是否需要收缩
        while(window.get(c)>1){
            let d=s[left]
            left++
            window.set(d,window.get(d)-1)
        }
        res = Math.max(res,right-left)
    }
    return res
};