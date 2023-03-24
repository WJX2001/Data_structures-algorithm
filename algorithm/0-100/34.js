// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]

var searchRange = function(nums, target) {
    return [left_search(nums,target),right_search(nums,target)]
};

var left_search = function(nums,target) {
    let left = 0
    let right = nums.length-1
    while(left<=right) {
        var mid = left + Math.floor((right-left)/2)
        if(nums[mid] <target) {
            left = mid+1
        }else if(nums[mid]>target) {
            right = mid-1
        }else if(nums[mid] === target){
            right = mid-1
        }
    }
    if(left === nums.length) return -1
    return nums[left] === target ?left:-1
}

var right_search = function(nums,target) {
    let left = 0
    let right = nums.length-1
    while(left<=right) {
        var mid = left + Math.floor((right-left)/2)
        if(nums[mid] <target) {
            left = mid+1
        }else if(nums[mid]>target) {
            right = mid-1
        }else if(nums[mid] === target){
            left = mid+1
        }
    }
    if(left-1<0) return -1
    return nums[left-1] === target ?(left-1):-1
}