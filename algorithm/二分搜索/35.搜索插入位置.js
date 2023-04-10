var searchInsert = function(nums, target) {
    if(nums.length === 0){
        return 0
    }
    let left=0,right = nums.length
    while(left<right) {
        let mid = left + Math.floor((right - left) / 2);
        if(nums[mid] === target) {
            right = mid
        } else if(nums[mid] <target) {
            left = mid+1
        }else if(nums[mid] >target) {
            right = mid
        }
    }
    return left
    
};