/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  // 创建一个二维数组
  const memo = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
      memo[i] = new Array(t.length).fill(-1);
  }


  function dp(s,i,t,j,memo) {
      const m = s.length,n = t.length
      if(j == n) {
          // 子序列已经全部匹配完成
          return 1
      }

      if(n-j > m-i) {
          // 待匹配子序列的长度不应该比字符串的长度还要短
          return 0
      }
      if(memo[i][j] != -1) {
          // 已经计算过对应状态 这里的功能相当于一个备忘录
          return memo[i][j]
      }
      let res = 0
      // 状态转移方程
      if(s.charAt(i) == t.charAt(j)) {
          // 这里有两种情况且需要叠加：
          // 1. 让s[0] 可以匹配 t[0] 那么原问题转化为 s[1..] 去匹配 t[1..] 
          // 2. 不让s[0] 匹配 t[0] 那么原问题转化为 s[1..] 去匹配t[0..]
          res += dp(s,i+1,t,j+1,memo) + dp(s,i+1,t,j,memo)
      } else {
          res += dp(s,i+1,t,j,memo)
      }
      memo[i][j] = res
      return res
  }
  return dp(s,0,t,0,memo)
};



