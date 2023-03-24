// 搜索插入位置
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 输入: nums = [1,3,5,6], target = 5
// 输出: 2

// 输入: nums = [1,3,5,6], target = 2
// 输出: 1

/**
 * 解题思路：当目标target不存在数组nums中时，搜索左侧边界的二分搜索的返回值可以做以下几种解读：
 * 1. 返回的这个值是 nums中大于等于target的最小元素索引
 * 2. 返回的这个值是target 应该插入在nums中的索引位置
 * 3. 返回的这个值是nums中小于target的元素个数
 * 
 * @param {*} nums 
 * @param {*} target 
 */
var searchInsert = function(nums, target) {
    let left = 0
   let right = nums.length-1
   while(left <= right) {
       var mid = left + Math.floor((right-left)/2)
       if(nums[mid] <target) {
           left = mid+1
       } else if(nums[mid] >target) {
           right = mid-1
       } else if(nums[mid] === target) {
           right = mid-1
       }
   }
   if(nums.length === 0) return -1
   return left
}