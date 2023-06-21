/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if(n ===0 || n===1) {
      // base case
      return n
  }

  // 分别代表dp[i-1]和dp[i-2]
  let dp_i_1 = 1,dp_i_2 = 0
  for(let i=2;i<=n;i++) {
      const dp_i = dp_i_1+dp_i_2
      dp_i_2 = dp_i_1
      dp_i_1 = dp_i
  }
  return dp_i_1
};