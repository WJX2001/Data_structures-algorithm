// 注意：javascript 代码由 chatGPT🤖 根据我的 cpp 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码已经通过力扣的全部测试用例，可直接粘贴提交。

var minWindow = function(s, t) {
    const need = new Map();
    const window = new Map();
    // 统计 t 中每个字符出现的次数
    for (let c of t) {
        need.set(c, need.has(c) ? need.get(c) + 1 : 1)
    }

    let left = 0, right = 0;
    let valid = 0;
    // 记录最小覆盖子串的起始索引及长度
    let start = 0, len = Infinity;
    while (right < s.length) {
        // c 是将移入窗口的字符
        let c = s[right];
        // 右移窗口
        right++;
        // 进行窗口内数据的一系列更新
        if (need.has(c)) {
            window.set(c, window.has(c) ? window.get(c) + 1 : 1)
            if (window.get(c) === need.get(c))
                valid++;
        }

        // 判断左侧窗口是否要收缩
        while (valid === need.size) {
            // 在这里更新最小覆盖子串
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            // d 是将移出窗口的字符
            let d = s[left];
            // 左移窗口
            left++;
            // 进行窗口内数据的一系列更新
            if (need.has(d)) {
                if (window.get(d) === need.get(d))
                    valid--;
                window.set(d, window.get(d) - 1)
            }
        }
    }
    // 返回最小覆盖子串
    return len === Infinity ?
            "" : s.substr(start, len);
};
// 详细解析参见：
// https://labuladong.github.io/article/?qno=76
