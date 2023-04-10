var searchMatrix = function(matrix, target) {

    let m = matrix.length
    let n = matrix[0].length
    // 初始化在左上角
    var i=0;j=n-1
    while(i<m && j>=0){
        if(matrix[i][j] === target) {
            return true
        } else if(matrix[i][j] >target) {
            j--
        } else if(matrix[i][j] <target) {
            i++
        }
    }
    // while没找到
    return false
};
