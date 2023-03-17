var corpFlightBookings = function(bookings, n) {
    let nums = new Array(n).fill(0)
    let df = new Difference(nums)
    for(let k=0;k<bookings.length;k++){
        let i = bookings[k][0] -1
        let j = bookings[k][1] -1
        let val = bookings[k][2]
        df.increment(i,j,val)
    }
    return df.result()
};

var Difference = function(nums) {
    // 差分数组
    let diff = []
    if(nums.length>0){
        // 构建差分数组
        diff[0] = nums[0]
        for(let i=1;i<nums.length;i++){
            diff[i] = nums[i] - nums[i-1]
        }
    }

    // 给区间[i,j]增加 val，可以是负数
    this.increment = function(i,j,val){
        diff[i] +=val
        if(j+1 < diff.length){
            diff[j+1] -= val
        }
    }

    // 从差分数组还原
    this.result = function() {
        var res = new Array(diff.length)
        // 根据差分数组构造结果
        res[0] = diff[0]
        for(let i=1;i<diff.length;i++){
            res[i] = res[i-1] + diff[i]
        }
        return res
    }
}