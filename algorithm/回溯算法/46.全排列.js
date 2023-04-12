

var permute = function(nums) {
    let res = []
    // 路径：记录在track中
    let track = []
    let used = new Array(nums.length).fill(false)
    // 选择列表： nums 中不存在于track 中的函数(used[i]为false)

    const backtrack = function(nums,track,ussed){
        if(track.length === nums.length) {
            res.push([...track])
            return;
        }
        for(let i=0;i<nums.length;i++) {
            if(used[i]){
                // nums[i] 已经在track 中跳过
                continue
            }
            // 做选择
            track.push(nums[i])
            used[i] = true
            backtrack(nums,track,used);
            // 取消选择
            track.pop()
            used[i] = false
        }
    }
    backtrack(nums,track,used)
    return res
};