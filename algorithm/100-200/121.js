/**
 * 股票买入时机
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 * 输入：[7,1,5,3,6,4]
   输出：5
   解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
   注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。


   输入：prices = [7,6,4,3,1]
   输出：0
   解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 */


/**
 * 方法1: 贪心法
 * 取最左最小值，取最右最大值，那么得到的差值为最大利润
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 * 
 */

var maxProfit = function(prices) {
    if(prices.length == 0){
        return 0
    }
    let min = prices[0]
    let max = 0

    for(let p of prices){
        min = Math.min(min,p)
        max = Math.max(max,p-min)
    }
    return max
};


/**
 * 
 * 动态规划思路
 * dp[i][k][0] 第i天 还可以交易k次，手中没有股票
 * dp[i][k][1] 第i天 还可以交易k次，手中有股票
 * 
 * 今天没有股票分为两种情况：
 *      1.昨天就没有，今天不操作 
 *      dp[i-1][k][0]
 *      2.昨天有，今天卖了
 *      dp[i-1][k][1] + prices[i]
 * 今天有股票分为两种情况：
 *      1.昨天有，今天不操作
 *      dp[i-1][k][1]
 *      2.昨天没有，今天买股票
 *      dp[i-1][k][0] - prices[i]
 */


/**
 * 
 * 最大利润的情况为 两种情况的最大值
 */


var maxProfit = function(prices) {
    let n = prices.length
    let dp = Array.from(new Array(n),() => new Array(2))
    // 第0天不持有股票 
    dp[0][0] = 0 
    // 第0天持有股票
    dp[0][1] = -prices[0]
    for(let i=1;i<n;i++){
        dp[i][0] = Math.max(dp[i-1][0],dp[i][1]+prices[i])
        dp[i][1] = Math.max(dp[i-1][1],-prices[i])  // 本来是(dp[i-1][1],dp[i-1][0]-prices[i]) k=0时 没有交易次数，dp[i - 1][0][0] = 0

    }
    // 返回最后一天手里没有股票的情况 也就是全部出手了
    return dp[n-1][0]
};