var minDistance = function(word1, word2) {
  let m = word1.length,n = word2.length
  let dp = new Array(m+1).fill().map(() => new Array(n+1).fill(0))

  // base case
  for(let i=0;i<=m;i++) {
      dp[i][0] = i
  }
  for(let j=0;j<=n;j++) {
      dp[0][j] = j
  }
  // 自底向上求解
  for(let i=1;i<=m;i++) {
      for(let j=1;j<=n;j++) {
          if(word1.charAt(i-1) === word2.charAt(j-1)){
              dp[i][j] = dp[i-1][j-1]
          }else {
              dp[i][j] = Math.min(
                  dp[i-1][j]+1,       // 删除
                  dp[i][j - 1] + 1,   // 插入
                  dp[i - 1][j - 1] + 1    // 替换
              )
          }
      }
  }
  return dp[m][n]
};