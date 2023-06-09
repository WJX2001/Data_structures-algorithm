// 搜索旋转排序数组
// 整数数组 nums 按升序排列，数组中的值 互不相同 。

// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
// 输入：nums = [4,5,6,7,0,1,2], target = 0
// 输出：
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length-1
    while(left <=right) {
        var mid = left+Math.floor((right-left)/2)
        // 首先检查nums[mid] 是否找到了target
        if(nums[mid] === target) return mid

        if(nums[mid] >=nums[left]){
            // mid落在了断崖左边 [left -> mid]有序
            if(target >=nums[left] && target <nums[mid]){
                //  target 落在了[left..mid-1]
                right = mid-1
            } else {
                // target 落在了[mid+1..right]
                left = mid+1
            }

        } else {
            // mid落在了断崖右边 nums[mid,right] 有序
            if(target <=nums[right] && target>nums[mid]){
                // target 落在了mid+1..right
                left = mid+1
            }else {
                right = mid-1
            }
        }
    }
    // while结束还没找到，说明target不存在
    return -1
};

