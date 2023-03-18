// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码已经通过力扣的全部测试用例，可直接粘贴提交。

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var n = matrix.length;
    // 先沿对角线反转二维矩阵
    for (var i = 0; i < n; i++) {
        for (var j = i; j < n; j++) {
            // swap(matrix[i][j], matrix[j][i]);
            var temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    // 然后反转二维矩阵的每一行
    for (var row of matrix) {
        reverse(row);
    }
}

// 反转一维数组
function reverse(arr) {
    var i = 0, j = arr.length - 1;
    while (j > i) {
        // swap(arr[i], arr[j]);
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}
// 详细解析参见：
// https://labuladong.github.io/article/?qno=48
