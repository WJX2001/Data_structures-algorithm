// 回文数
// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

// 数字并不能像字符串那样简单粗暴，用双指针暴力求解
// 需要你从后往前把 x 的每一位拿出来，用这个技巧生成一个数字 y，如果 y 和 x 相等，则说明 x 是回文数字。
// 如何从后往前拿出一个数字的每一位？和 10 求余数就行了呗

var isPalindrome = function(x) {
    if(x<0){
        return false
    }
    var temp = x
    // y 是x 反转之后的数字
    let y = 0
    while(temp > 0){
        var last_num = temp %10
        temp = Math.floor(temp/10);
        // 从最高位生成数字的技巧
        y = y*10 + temp
    }
    return y == x
}