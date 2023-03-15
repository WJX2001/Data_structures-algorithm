// 移动0
/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
    输入: nums = [0,1,0,3,12]
    输出: [1,3,12,0,0]
*/
var moveZeroes = function(nums) {
    // 去除nums中的所有0
    // 返回去除0之后的数组长度
    var p = removeElement(nums,0);
    // 将p之后的所有元素赋值为0
    for(;p<nums.length;p++){
        nums[p] = 0
    }
};



// 双指针技巧
var removeElement = function(nums,val){
    var fast = 0
    var slow = 0
    while(fast<nums.length){
        if(nums[fast] !== val){
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow     //不重复的数组的长度 

}