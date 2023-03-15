// 无重复字符的最长子串

/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 输入: s = "abcabcbb"
   输出: 3 
   解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */

/**
 * 输入: s = "bbbbb"
   输出: 1
   解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 */

var lengthOfLongestSubstring = function (s) {
    // 哈希集合，记录每个字符是否出现过
    const set = new Set()
    const n = s.length
    // 右指针，初始值为-1，相当于我们在字符串的左边界的左侧，还没开始移动
    let rk = -1, ans = 0
    for (let i = 0; i < n; i++) {
        if (i != 0) {
            // 左指针每向右移动一格，就需要移除一个字符,将集合中的那个字符删掉，然后继续向后找
            set.delete(s.charAt(i - 1))
        }
        while (rk + 1 < n && !set.has(s.charAt(rk + 1))) {
            // 不断移动右指针
            set.add(s.charAt(rk + 1))
            ++rk
        }
        // 第i到rk个字符是一个极长的无重复字符子串
        ans = Math.max(ans, rk - i + 1);
    }
    return ans
};