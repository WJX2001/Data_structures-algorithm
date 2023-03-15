
/**
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */




var removeDuplicates = function(nums) {
    if (nums.length == 0) {
        return 0;
    }
    // 快慢指针，维护 nums[0..slow] 为结果子数组
    let slow = 0, fast = 0;
    // 记录一个元素重复的次数
    let count = 0;
    while (fast < nums.length) {
        if (nums[fast] != nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        } else if (slow < fast && count < 2) {
            // 当一个元素重复次数不到 2 次时，也
            slow++;
            nums[slow] = nums[fast];
        }
        fast++;
        count++;
        if (fast < nums.length && nums[fast] != nums[fast - 1]) {
            // 遇到不同的元素
            count = 0;
        }
    }
    // 数组长度为索引 + 1
    console.log(slow+1)
    let arr = []
    for(let i=0;i<slow+1;i++) {
        arr.push(nums[i])
    }
    console.log(arr)
    return slow + 1;
};
removeDuplicates([0,0,1,1,1,1,2,3,3])