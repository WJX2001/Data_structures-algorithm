var searchMatrix = function (matrix, target) {
    var m = matrix.length // 行数
    var n = matrix[0].length     // 列数
    // 将二维数组映射到一维数组
    var left = 0,right = m*n-1

    // 前文讲的标准的二分搜索框架
    while(left <=right) {
        var mid = left + Math.floor((right-left)/2)
        if(get(matrix,mid) === target) {
            return true
        } else if(get(matrix,mid) <target){
            left = mid+1
        } else if(get(matrix,mid) > target){
            right = mid-1
        }
    }
    return false
}

// 通过一维坐标访问二维数组中的元素
var get = function(matrix,index){
    var m = matrix.length,n = matrix[0].length
    // 计算二维中的横纵坐标
    var i = Math.floor(index/n),j = index%n
    return matrix[i][j]
}

// 测试数据
let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3
console.log(searchMatrix(matrix,target))