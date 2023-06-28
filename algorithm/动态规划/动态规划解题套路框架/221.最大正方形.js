
var maximalSquare = function(matrix) {
  var m = matrix.length,
    n = matrix[0].length;
    // 定义：以 matrix[i][j] 为右下角元素的全为 1 正方形矩阵的最大边长为 dp[i][j]。
  var dp = new Array(m).fill(0).map(() => {
    return new Array(n).fill(0);
  });

  // base case，第一行和第一列的正方形边长
  for (var i = 0; i < m; i++) {
    dp[i][0] = parseInt(matrix[i][0]);
  }
  for (var j = 0; j < n; j++) {
    dp[0][j] = parseInt(matrix[0][j]);
  }

  // 进行状态转移
  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      if (matrix[i][j] == '0') {
        // 值为 0 不可能是正方形的右下角
        continue;
      }
      dp[i][j] = Math.min(
        dp[i - 1][j],
        dp[i][j - 1],
        dp[i - 1][j - 1]
      ) + 1;
    }
  }

  var len = 0;
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      len = Math.max(len, dp[i][j]);
    }
  }
  return len * len;
};