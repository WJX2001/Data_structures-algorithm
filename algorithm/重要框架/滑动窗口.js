
/**
 * 滑动窗口算法框架
 * @param {string} s
 * @return {void}
 */
var slidingWindow = function(s) {
    const window = new Map();
    let left = 0,right = 0;
    while(right < s.length){
        // c是将移入窗口的字符
        const c = s[right]
        // 增大窗口
        right++
        // 进行窗口内的一系列更新


        // 判断左侧窗口是否需要收缩
        while(/** window needs shrink */ ){
            // d 是将要移出窗口的字符
            const d = s[left];
            // 缩小窗口
            left ++;
            // 进行窗口内数据的一系列更新
        }
    }
}