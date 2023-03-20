// 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
// 换句话说，s1 的排列之一是 s2 的 子串 。


// 输入：s1 = "ab" s2 = "eidbaooo"
// 输出：true
// 解释：s2 包含 s1 的排列之一 ("ba").

var checkInclusion = function(t, s) {
    // 初始化哈希表
    let need = new Map()
    let window = new Map()

    // 进行need 填充
    for(let c of t){
        need.set(c,(need.get(c)||0)+1)
    }

    // 对窗口进行配置
    let left = 0
    let right = 0
    let valid = 0
    while(right<s.length){
        let c = s[right]
        right++
        if(need.has(c)){
            window.set(c,(window.get(c)||0)+1)
            if(need.get(c) === window.get(c)){
                valid++
            }
        }

        // 判断左侧需要缩小窗口
        if(right - left >=t.length){
            if(valid === need.size){
                return true
            }
            let d = s[left]
            left++

            // 进行更新
            if(need.has(d)){
                if(window.get(d) === need.get(d)){
                    valid--
                }
                window.set(d,(window.get(d)||0)-1)
            }
        }
    }
    // 未找到符合条件的子串
    return false
}