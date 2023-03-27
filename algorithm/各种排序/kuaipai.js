function quickSort (arr) {
    const rec = (arr) => {
      if (arr.length <= 1) { return arr; }
      const left = [];
      const right = [];
      const mid = arr[0]; // 基准元素
      for (let i = 1; i < arr.length; i++){
        if (arr[i] < mid) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
      return [...rec(left), mid, ...rec(right)]
    }
    return rec(arr)
  };
  const arr = [1,5,7,2,4,0]
  const a  = quickSort(arr)
  console.log(a)