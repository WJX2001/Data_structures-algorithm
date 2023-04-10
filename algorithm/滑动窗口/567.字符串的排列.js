var checkInclusion = function (s1, s2) {
    let need = new Map()
    let window = new Map()

    for (let i = 0; i < s1.length; i++) {
        if (need.has(s1[i])) {
            need.set(s1[i], need.get(s1[i]) + 1)
        } else {
            need.set(s1[i], 1)
        }
    }

    let left = 0, right = 0, valid = 0
    while (right < s2.length) {
        let c = s2[right]
        // 右指针不断移动
        right++
        if (need.has(c)) {
            if (window.has(c)) {
                window.set(c, window.get(c) + 1)
            } else {
                window.set(c, 1)
            }
            if (window.get(c) === need.get(c)) {
                valid++
            }
        }
        // 判断左侧窗口是否需要收缩
        while (right - left >= s1.length) {
            // 更新结果
            if (valid === need.size) {
                return true
            }
            let d = s2[left]
            left++
            // 进行窗口内数据的更新
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--
                }
                window.set(d, window.get(d) - 1)
            }
        }

    }
    return false
};
