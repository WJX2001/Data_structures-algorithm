// 区间加法
// 假设你有一个长度为 n 的数组，初始情况下所有的数字均为 0，你将会被给出 k​​​​​​​ 个更新的操作。
// 其中，每个操作会被表示为一个三元组：[startIndex, endIndex, inc]，
// 你需要将子数组 A[startIndex ... endIndex]（包括 startIndex 和 endIndex）增加 inc。
// 请你返回 k 次操作后的数组。

// 输入: length = 5, updates = [[1,3,2],[2,4,3],[0,2,-2]]
// 输出: [-2,0,3,5,3]

// 初始状态:
// [0,0,0,0,0]

// 进行了操作 [1,3,2] 后的状态:
// [0,2,2,2,0]

// 进行了操作 [2,4,3] 后的状态:
// [0,2,5,5,3]

// 进行了操作 [0,2,-2] 后的状态:
// [-2,0,3,5,3]

var getModifiedArray = function(length, updates) {
    // nums 初始化为全0
    var nums = new Array(length)
    nums.fill(0);
    // 构造差分解法
    var diff = new Difference(nums);
    for(let k=0;k<updates.length;k++) {
        var i = updates[k][0];
        var j = updates[k][1];
        var val = updates[k][2]
        diff.increment(i,j,val)
    }
    return diff.result();
}

var Difference = function(nums) {
    // 差分数组
    var diff = []
    if(nums.length >0){
        // 构建差分数组
        diff[0] = nums[0]
        for(let i=1;i<nums.length;i++){
            diff[i] = nums[i] - nums[i-1]
        }
    }

    /** 给闭区间[i,j]增加val (可以是负数) */
    this.increment = function(i,j,val){
        diff[i] += val
        if(j+1<diff.length){
            diff[j+1] -= val
        }
    }

    // 从差分数组进行复原
    this.result = function() {
        var res = new Array(diff.length);
        // 根据差分数组构造结果数组
        res[0] = diff[0]
        for(let i=1;i<diff.length;i++) {
            res[i] = res[i-1]+diff[i]
        }
        return res
    }
}