var removeBymyself = function(nums){
    let fast =0
    let slow = 0
    let res = []
    if(nums.length === 0) return 0
    while(fast<nums.length){
        if(nums[fast]!== nums[slow]){
            res.push(nums[slow])
            slow++
            nums[slow] = nums[fast]
        }
        fast++
    }
    return res
}

let arr = [1,2,2,2,4,6,4]
console.log(removeBymyself(arr))