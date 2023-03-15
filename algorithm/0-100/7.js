/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
假设环境不允许存储 64 位整数（有符号或无符号）。
 */

/**
 * 输入：x = 123
 * 输出：321
 */

/**
 * 输入：x = -123
   输出：-321
 */

   /**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0
    while(x!=0){
        // 个位部分可以通过取余数 十位甚至其他位置可以通过 乘10 + 各位部分
        const digit = x%10
        // 可以去除一个数字的小数部分 得到一个整数
        x = ~~(x/10)
        // 将数字复原
        rev = rev*10+ digit
        if(rev <Math.pow(-2,31) || rev >Math.pow(2,31)-1){
            return 0
        }
    }
    return rev
};