// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let need = new Map()
    let window = new Map()
    // 初始化need
    for(let i=0;i<p.length;i++) {
        if(need.has(p[i])){
            need.set(p[i],need.get(p[i])+1)
        }else {
            need.set(p[i],1)
        }
    }

    let left=0,right=0,valid=0
    // 头部索引
    let res = []
    while(right<s.length){
        let c = s[right]
        right++

        if(need.has(c)) {
            if(window.has(c)) {
                window.set(c,window.get(c)+1)
            }else {
                window.set(c,1)
            }
            if(window.get(c) === need.get(c)) {
                valid++
            }
        }
        // 判断 需要缩减窗口
        while(right-left>=p.length){
            if(valid === need.size){
                // 当窗口符合条件，把起始索引加入res
                res.push(left)
            }
            const d = s[left]
            // 窗口缩减
            left++
            if(need.has(d)){
                if(window.has(d)){
                    if(window.get(d) === need.get(d)){
                        valid--
                    }
                    window.set(d,window.get(d)-1)
                }
            }

        }
        
    }
    return res
};