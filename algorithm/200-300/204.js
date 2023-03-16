// 计数质数
// 给定整数 n ，返回 所有小于非负整数 n 的质数的数量 。
// 输入：n = 10
// 输出：4
// 解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。

// 输入：n = 1
// 输出：0

var countPrimes = function(n) {
    const isPrime = new Array(n).fill(true);
    for(let i=2;i*i<n;i++){
        if(isPrime[i]){
            for(let j=i*i;j<n;j+=i){
                isPrime[j] = false
            }
        }
    }
    let count = 0
    for(let i=2;i<n;i++) {
        if(isPrime[i]) count++
    }
    return count
}