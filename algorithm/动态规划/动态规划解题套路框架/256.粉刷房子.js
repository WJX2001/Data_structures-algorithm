var minCost = function(costs) {
  var n = costs.length
  // 定义： 当第i个房子粉刷颜色j时，粉刷[0..i]这些房子所需的最少花费为dp[i][j]
  // 其中 j=0,1,2分别代表三种颜色
  var dp = new Array(n)
  for(var i=0;i<n;i++) {
    dp[i] = new Array(3)
  }

  // base case
  for(var j=0;j<3;j++) {
    // 粉刷第一个房子的花费是确定的
    dp[0][j] = costs[0][j]
  }

  // 状态转移 穷举所有选择
  for(let i=1;i<n;i++) {
    // 颜色0 只能挨着颜色 1 或者 2
    dp[i][0] = Math.min(dp[i-1][1],dp[i-1][2])+costs[i][0]
    // 颜色1 只能挨着颜色 0 或者 2
    dp[i][1] = Math.min(dp[i-1][0],dp[i-1][2])+costs[i][1]
    // 颜色2 只能挨着颜色 0 或者 1
    dp[i][2] = Math.min(dp[i-1][0],dp[i-1][1])+costs[i][2]
  }

  // 计算结果
  var res = Number.MAX_VALUE
  for(let j=0;j<3;j++) {
    res = Math.min(res,dp[n-1][j])
  }
  return res
};