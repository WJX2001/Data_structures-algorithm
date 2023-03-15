/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 示例 1：
    输入：nums = [2,7,11,15], target = 9
    输出：[0,1]
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 * 示例 2：

    输入：nums = [3,2,4], target = 6
     输出：[1,2]
 */

/**
 * 使用哈希表方法，
 * 创建一个哈希表，map对象总存放的是{key,value}键值对
 * has(key) 判断map中是否存在key,返回boolen值
 * get(key) 方法返回map中的value值
 * 
 */

/**
 * 用map存放键值对 （元素值key  元素下标值value）
 * 用target剪去数组中的某个元素，然后判断map中是否有相同的值，如果有，那么通过get方法返回下标值
 */


var twoSum = function(nums, target) {
    let map = new Map()
    let res = []
    map.set(nums[0],0)
    for(let i=1;i<nums.length;i++){
        // 另一个数是 目标值 - 当前遍历到的数
        let another = target-nums[i]
        if(map.has(another)){
            // 如果哈希表中存在另一个值与他相等，那么就返回
            return [i,map.get(another)]
        }
        // 如果不存在相等的情况，则将值存入哈希表
        map.set(nums[i],i)
        
    }
};


