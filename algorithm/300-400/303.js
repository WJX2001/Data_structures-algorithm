// 区域和检索 - 数组不可变
/**
 * 主要是用前缀和的方法
 * 适用于索引区间内的所有元素之和
 */

var NumArray = function(nums) {
    // 前缀和数组
    this.preSum = []
    // preSum[0] = 0 便于计算累加和
    this.preSum[0] = 0
    // 计算nums 的累加和
    for(let i=1;i<=nums.length;i++) {
        this.preSum[i] = this.preSum[i-1] + nums[i-1]
    }
}

NumArray.prototype.sumRange = function(left, right) {
    return this.preSum[right+1] - this.preSum[left]
}