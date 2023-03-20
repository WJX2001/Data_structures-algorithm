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

// 注意：javascript 代码由 chatGPT🤖 根据我的 cpp 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码已经通过力扣的测试用例，应该可直接成功提交。

var lengthOfLongestSubstring = function(s) {
  
  let window = new Map();
  let left = 0,right = 0,res = 0
  while(right < s.length){
    let c = s[right]
    right++
    window.set(c,(window.get(c)|| 0)+1)
    // 判断左侧窗口
    while(window.get(c) >1){
      let d = s[left]
      left++
      // 进行窗口内数据的一系列更新
      window.set(d,window.get(d)-1)
    }
    res = Math.max(res,right-left)
  }
  // 进行窗口更新

  // 判断左侧窗口是否要收缩

  // 进行窗口的一系列更新
  return res
}