// var coinChange = function(coins, amount) {
//   let memo = new Array(amount + 1).fill(-666);
//   return dp(coins, amount);

//   function dp(coins, amount) {
//       if (amount == 0) return 0;
//       if (amount < 0) return -1;
//       // 查备忘录，防止重复计算
//       if (memo[amount] != -666)
//           return memo[amount];

//       let res = Number.MAX_SAFE_INTEGER;
//       for (let coin of coins) {
//           // 计算子问题的结果
//           let subProblem = dp(coins, amount - coin);
//           // 子问题无解则跳过
//           if (subProblem == -1) continue;
//           // 在子问题中选择最优解，然后加一
//           res = Math.min(res, subProblem + 1);
//       }
//       // 把计算结果存入备忘录
//       memo[amount] = (res == Number.MAX_SAFE_INTEGER) ? -1 : res;
//       return memo[amount];
//   }
// };


//? DP 数组的迭代解法

var coinChange = function(coins, amount) {
  var dp = new Array(amount+1).fill(amount+1);
  dp[0] = 0
  for(var i=0;i<dp.length;i++) {
    for( var coin of coins) {
      if(i-coin <0) {
        continue
      }
      dp[i] = Math.min(dp[i],1+dp[i-coin])
    }
  }
  return (dp[amount] == amount+1 ? -1 : dp[amount])
}