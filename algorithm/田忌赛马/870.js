var advantageCount = function(nums1, nums2) {
    var n = nums1.length;
    //给 nums2 降序排序
    var maxpq = []
    for (var i = 0; i < n; i++) {
        maxpq.push([i, nums2[i]]);
    }
    maxpq = maxpq.sort((a,b) =>b[1]-a[1])
    //给 nums1 升序排序
    nums1.sort((a, b) => a - b);
    // nums1[left] 是最小值，nums1[right] 是最大值
    var left = 0, right = n - 1;
    var res = new Array(n);

    while (maxpq.length) {
        var pair = maxpq.shift();
        // maxval 是 nums2 中的最大值，i 是对应索引
        var i = pair[0], maxval = pair[1];
        if (maxval < nums1[right]) {
            // 如果 nums1[right] 能胜过 maxval，那就自己上
            res[i] = nums1[right];
            right--;
        } else {
            // 否则用最小值混一下，养精蓄锐
            res[i] = nums1[left];
            left++;
        }
    }
    console.log(res)
    return res;
}

advantageCount(nums1 = [12,24,8,32], nums2 = [13,25,32,11])