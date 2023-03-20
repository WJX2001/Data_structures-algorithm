// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
var findAnagrams = function(s, t) {
    let need = new Map()
    let window = new Map()
    for(let c of t){
        need.set(c,(need.get(c)||0)+1)
    }

    let left = 0,right = 0
    let valid = 0
    let res = []
    // 增大窗口
    while(right<s.length){
        // c 是即将移入窗口的元素
        let c = s[right]
        // 窗口右移
        right++

        // 进行一系列扩容
        if(need.has(c)){
            window.set(c,(window.get(c)||0)+1)
            if(need.get(c) === window.get(c)){
                valid++
            }
        }

        // 判断左侧窗口是否需要收缩
        while(right-left >=t.length){
            if(valid === need.size){
                res.push(left)
            }

            // 缩小窗口
            let d = s[left]
            left++
            if(need.has(d)){
                if(need.get(d)=== window.get(d)) valid--
                window.set(d,window.get(d)-1)
            }
        }
    }
    

    return res

    
}