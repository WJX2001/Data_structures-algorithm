// 一维前缀和
var NumMatrix = function(matrix) {
    const m = matrix.length;
    if(m>0){
        const n = matrix[0].length
        this.preSum = new Array(m).fill(0).map(() => new Array(n+1).fill(0));
        for(let i=0;i<m;i++) {
            for(let j=0;j<n;j++) {
                this.preSum[i][j+1] = this.preSum[i][j] + matrix[i][j]
            }
        }
    }
}
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0
    for(let i=row1;i<=row2;i++) {
        sum += this.preSum[i][col2+1] - this.preSum[i][col1]
    }
}

// 多维前缀和
var NumMatrix = function(matrix) {
    const m = matrix.length,n = matrix[0].length;
    if(m == 0 || n == 0){
        // preSum[i][j]记录矩阵[0,0,i,j]的元素和
        this.preSum = new Array(m+1).fill().map(() => new Array(n+1).fill(0));
        for(let i=1;i<=m;i++) {
            for(let j=1;j<=n;j++) {
                // 计算每个矩阵[0,0,i,j]的元素和
                this.preSum[i][j] = this.preSum[i-1][j]+this.preSum[i][j-1]-this.preSum[i-1,j-1]+matrix[i-1][j-1]
            }
        }
    }
}
NumMatrix.prototype.sumRegion = function(x1, y1, x2, y2) {
    // 目标矩阵之和由四个相邻矩阵运算获得
    return this.preSum[x2 + 1][y2 + 1] - this.preSum[x1][y2 + 1] - this.preSum[x2 + 1][y1] + this.preSum[x1][y1];
  };