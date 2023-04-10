
// 由于已经排序好，所以不用进行排序，正常排序为升序
var twoSum = function(numbers, target) {
    let left = 0,right = numbers.length-1
    while(left<right) {
        let sum = numbers[left] + numbers[right]
        if(sum<target) {
            left++
        }
        if(sum>target) {
            right--
        }
        if(sum === target){
            return [left+1,right+1]
        }
    }
    return []
};