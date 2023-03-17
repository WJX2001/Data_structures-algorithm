// 反转字符串中的单词
// 给你一个字符串 s ，请你反转字符串中 单词 的顺序。

// 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。

// 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。

// 注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

// 输入：s = "the sky is blue"
// 输出："blue is sky the"

// 输入：s = "  hello world  "
// 输出："world hello"
// 解释：反转后的字符串中不能存在前导空格和尾随空格。

// 输入：s = "a good   example"
// 输出："example good a"
// 解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。





var reverseWords = function(s) {

}




// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码已经通过力扣的全部测试用例，可直接粘贴提交。

var reverseWords = function(s) {
    let sb = "";
    // 先清洗一下数据，把多于的空格都删掉
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (c !== ' ') {
            // 单词中的字母/数字
            sb += c;
        } else if (sb !== "" && sb[sb.length - 1] !== ' ') {
            // 单词之间保留一个空格
            sb += ' ';
        }
    }
    // 末尾如果有空格，清除之
    if (sb[sb.length - 1] === ' ') {
        sb = sb.substring(0, sb.length - 1);
    }

    // 清洗之后的字符串
    let chars = sb.split('');
    let n = chars.length;
    // 进行单词的翻转，先整体翻转
    reverse(chars, 0, n - 1);
    // 再把每个单词翻转
    for (let i = 0; i < n;) {
        for (let j = i; j < n; j++) {
            if (j + 1 === n || chars[j + 1] === ' ') {
                // chars[i..j] 是一个单词，翻转之
                reverse(chars, i, j);
                // 把 i 置为下一个单词的首字母
                i = j + 2;
                break;
            }
        }
    }
    // 最后得到题目想要的结果
    return chars.join("");
};

// 翻转 arr[i..j]
function reverse(arr, i, j) {
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}