
// 反转字符串
var reverseString = function(s) {
    var left = 0
    var right = s.length-1
    while(left<right){
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
    return s
}