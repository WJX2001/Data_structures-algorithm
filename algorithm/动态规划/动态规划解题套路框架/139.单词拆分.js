/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  // 备忘录 -1 代表未计算，0表示false 1代表 true
  let memo = new Array(s.length).fill(-1)
  // 根据函数定义，判断s[0..] 能否被拼出
  return dp(s,0,wordDict,memo)
};

// 定义： 返回 s[i..] 是否能够被wordDict 拼出
function dp(s,i,wordDict,memo) {
  // base case  整个s都被拼出来了
  if(i === s.length) {
      return true
  }

  // 防止冗余计算
  if(memo[i] !== -1) {
      return memo[i] === 1
  }
  // 遍历所有单词，尝试匹配 s[i..] 的前缀
  for (let word of wordDict) {
      let len = word.length;
      if (i + len > s.length) {
          continue;
      }
      let subStr = s.substring(i, i + len);
      if (subStr !== word) {
          continue;
      }
      // s[i..] 的前缀被匹配，去尝试匹配 s[i+len..]
      if (dp(s, i + len, wordDict, memo)) {
          // s[i..] 可以被拼出，将结果记入备忘录
          memo[i] = 1;
          return true;
      }
  }
  // s[i..] 不能被拼出，结果记入备忘录
  memo[i] = 0;
  return false;
}

