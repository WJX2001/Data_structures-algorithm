// 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
// 输入：nums = [1,1,2]
// 输出：2, nums = [1,2,_]
// 解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。

var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0
    let slow = 0,fast = 0
    while(fast<nums.length) {
        if(nums[fast]!==nums[slow]){
            slow++
            nums[slow] = nums[fast]
        }
        fast++
    }
    // 数组长度为索引+1
    return slow+1
}