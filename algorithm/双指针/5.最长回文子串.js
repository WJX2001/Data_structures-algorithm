var longestPalindrome = function(s) {
    let res = ""
    // 通过循环，判断以s[i]为中心的回文串，奇数的时候，中心只有一个，偶数的时候，中心有两个
    for(let i=0;i<s.length;i++) {
        // 以s[i]为中心的最长回文子串
        let s1 = isHuiwen(s,i,i)
        // 以s[i,i+1]为中心的最长回文子串
        let s2 = isHuiwen(s,i,i+1)
        res = res.length > s1.length ? res:s1
        res = res.length > s2.length ? res:s2
    }

    // 判断是否为回文串
    function isHuiwen(s,l,r) {
        // 防止索引越界
        while(l >=0 && r<s.length && s.charAt(l) === s.charAt(r)){
            // 向两边展开
            l--,
            r++
        }
        return s.substring(l+1,r)
    }
    return res
};


