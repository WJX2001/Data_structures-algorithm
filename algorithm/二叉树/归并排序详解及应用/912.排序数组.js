/**
 * 归并排序函数
 * @param {number[]} nums - 待排序的数组
 * @returns {number[]} - 排序后的数组
 */
var sortArray = function(nums) {
    /**
     * 合并两个有序数组
     * @param {number[]} left - 左半部分数组
     * @param {number[]} right - 右半部分数组
     * @returns {number[]} - 合并后的有序数组
     */
    const merge = (left, right) => {
      const result = [];
      let i = 0, j = 0;
  
      while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
          result.push(left[i]);
          i++;
        } else {
          result.push(right[j]);
          j++;
        }
      }
  
      // 将剩余的左半部分数组元素添加到结果数组中
      while (i < left.length) {
        result.push(left[i]);
        i++;
      }
  
      // 将剩余的右半部分数组元素添加到结果数组中
      while (j < right.length) {
        result.push(right[j]);
        j++;
      }
  
      return result;
    };
  
    /**
     * 归并排序递归函数
     * @param {number[]} nums - 待排序的数组
     * @returns {number[]} - 排序后的数组
     */
    const mergeSort = (nums) => {
      if (nums.length <= 1) {
        return nums;
      }
  
      const mid = Math.floor(nums.length / 2);
      const left = nums.slice(0, mid);
      const right = nums.slice(mid);
  
      return merge(mergeSort(left), mergeSort(right));
    };
  
    // 调用归并排序递归函数
    return mergeSort(nums);
  };
  
  // 示例用法：
  const nums = [8, 4, 2, 9, 5, 1, 6, 3, 7];
  const sortedNums = sortArray(nums);
  console.log(sortedNums); // 输出: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  