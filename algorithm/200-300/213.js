/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。
 * 这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。
 * 同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。
 * 输入：nums = [2,3,2]
 * 输出：3
 * 解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。 
 */

/**
 * 方法：动态规划
 * dp[i]=max(dp[i−2]+nums[i],dp[i−1])
 * 如果不偷最后一家 那么偷窃的范围[0,n-2]
 * 如果不偷第一家   那么偷窃的范围[1,n-1]
 */
var rob = function(nums) {
    const length = nums.length
    if(length === 0){
        return 0
    }
    if(length === 1){
        return nums[0]
    } else if(length === 2){
        return Math.max(nums[0],nums[1])
    }
    return Math.max(RobRange(nums,0,length-2),RobRange(nums,1,length-1))
};

const RobRange = (nums,start,end) => {
    let first = nums[start]
    let second = Math.max(nums[start],nums[start+1])
    for(i = start+2;i<=end;i++) {
        const tmp = second
        second = Math.max(first+nums[i],second)
        first = tmp
    }
    return second
    
}


