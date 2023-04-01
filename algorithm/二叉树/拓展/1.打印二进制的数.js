// 1. 请你实现一个函数，接受一个正整数 n，函数能够打印所有长度为 n 的二进制数。
// 例如输入n = 3，算法打印000 001 010 011 100 101 110 111，
// 共2^3 = 8个结果。
let path = ""
function printBinary(n) {
    // 边界条件：当 n = 0 时，输出当前路径
    if (n === 0) {
      // 到达叶子节点
      console.log(path);
      return 
    } 
    for(let i=0;i<2;i++){
        path +=i
        printBinary(n-1)
        path = path.substring(0,path.length-1)
    }
  }
  
  // 测试代码
  printBinary(3);

