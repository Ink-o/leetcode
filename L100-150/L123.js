/**
 * @param {number[]} prices
 * @return {number}
 * 动态规划
 */
var maxProfit = function(prices) {
    const len = prices.length;
    // dp[i][j]
    // 表示的是第i天第j+1种操作获得的最大价值
    const dp = new Array(len).fill(0).map(x => new Array(5).fill(0));

    // 总共有五种状态
    // 1、没有操作
    // 2、第一次买入
    // 3、第一次卖出
    // 4、第二次买入
    // 5、第二次卖出

    // 第一次买入
    dp[0][1] = -prices[0];
    // 第二次买入
    dp[0][3] = -prices[0];

    for (let i = 1; i < len; i++) {
        dp[i][0] = dp[i - 1][0];

        // 第一次买入（依赖的有上一层级没有操作的结果）
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);

        // 第一次卖出（依赖的有上一层级第一次买入的结果）
        dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]);

        // 第二次买入（依赖的有上一层级第一次卖出的结果）
        dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]);

        // 第二次卖出（依赖的有上一层级第二次买入的结果）
        dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i]);
    }
    return dp[len - 1][4];
};
console.log(maxProfit([3,3,5,0,0,3,1,4]));