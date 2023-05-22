function reversePairs(nums) {
    let count = 0;

    function sort(nums, lo, hi) {
        if (lo >= hi) {
            return;
        }

        let mid = lo + Math.floor((hi - lo) / 2);
        sort(nums, lo, mid);
        sort(nums, mid + 1, hi);
        merge(nums, lo, mid, hi);
    }

    function merge(nums, lo, mid, hi) {
        let temp = new Array(hi - lo + 1).fill(0);
        for (let i = lo; i <= hi; i++) {
            temp[i - lo] = nums[i];
        }
        let end = mid + 1;
        for (let i = lo; i <= mid; i++) {
            while (end <= hi && temp[i - lo] > temp[end - lo] * 2) {
                end++;
            }
            count += end - mid - 1;
        }

        let i = lo, j = mid + 1;
        for (let p = lo; p <= hi; p++) {
            if (i > mid) {
                nums[p] = temp[j - lo];
                j++;
            } else if (j > hi) {
                nums[p] = temp[i - lo];
                i++;
            } else if (temp[i - lo] > temp[j - lo]) {
                nums[p] = temp[j - lo];
                j++;
            } else {
                nums[p] = temp[i - lo];
                i++;
            }
        }
    }

    sort(nums, 0, nums.length - 1);
    return count;
}
