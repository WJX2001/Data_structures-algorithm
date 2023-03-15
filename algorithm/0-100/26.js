// 删除有序数组中的重复项
/**
 * 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
 * 由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。更规范地说，如果在删除重复项之后有 k 个元素，那么 nums 的前 k 个元素应该保存最终结果。
 */

var removeDuplicates = function(nums) {
    if(nums.length === 0){
        return null
    }
    let fast=0,slow=0
    while(fast<nums.length){
        if(nums[slow] != nums[fast]){
            slow ++
            // 让慢指针的值等于快指针，同时维持数组的无重复性
            nums[slow] = nums[fast]
        }
        fast++
    }
    return slow+1
}