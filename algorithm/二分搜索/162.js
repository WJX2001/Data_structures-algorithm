// 峰值元素是指其值严格大于左右相邻值的元素。
// 给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。
// 你可以假设 nums[-1] = nums[n] = -∞ 。
// 你必须实现时间复杂度为 O(log n) 的算法来解决此问题。
// 对于所有有效的 i 都有 nums[i] != nums[i + 1]

// 输入：nums = [1,2,3,1]
// 输出：2
// 解释：3 是峰值元素，你的函数应该返回其索引 2。

/**
 * 解题思路：当nums[mid] >nums[mid] 这时本身就是一个峰值，或者左边还有 right = mid
 * 如果走势上行（nums[mid] < nums[mid+1]），则说明 mid 右侧有一个峰值，需要收缩左边界（left = mid + 1）。
 * 
 */
var findPeakElement = function(nums) {
    let left = 0
    let right = nums.length-1
    while(left <right){
        let mid = left + Math.floor((right-left)/2)
        if(nums[mid]>nums[mid+1]) {
            // mid本身就是峰值 或者左侧有一个峰值 
            right = mid
        }else {
            // mid 右侧有一个峰值
            left = mid+1
        }
    }
    return left
};