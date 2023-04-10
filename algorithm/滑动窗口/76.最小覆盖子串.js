/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    // need记录题目所需要的字符及对应的此时
    let need = new Map()

    // window 记录所给定的长字符串，需要我们自己去筛选
    let window = new Map()

    // 对need哈希表进行填充，将给定的t放进去
    for (let i = 0; i < t.length; i++) {
        if (need.has(t[i])) {
            need.set(t[i], need.get(t[i]) + 1)
        } else {
            need.set(t[i], 1)
        }
    }
    console.log(need.size)

    let left = 0, right = 0, valid = 0, len = Infinity, start = 0
    while (right < s.length) {
        let c = s[right]
        // 右指针不断向右移动
        right++
        if (need.has(c)) {
            if (window.has(c)) {
                window.set(c, window.get(c) + 1);
            } else {
                window.set(c, 1)
            }
            if (window.get(c) === need.get(c)) {
                valid++
            }
        }
        // 判断左侧窗口是否需要收缩
        while (valid === need.size) {
            // 在这里更新最小覆盖子串
            if (right - left < len) {
                // 这里保证了此时的最小覆盖子串的开始和长度，以至于后续的left越界之后，仍能保持start还为之前合法的最小覆盖子串索引
                start = left;
                len = right - left
            }
            // d是将要移除的字符
            let d = s[left]
            // 缩小窗口
            left++
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--
                }
                window.set(d, window.get(d) - 1)
            }
        }
    }
    // 注意此处的返回值应该放在循环外面，否则无法得到正确结果
    // 如果len为Infinity，则说明在整个字符串s中找不到包含所有t中字符的子串，因此返回空字符串。
    return len === Infinity ? '' : s.substring(start, start + len);
};