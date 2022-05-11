/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if (!prices || prices.length < 2 || k === 0) {
        return 0;
    }
    
    // 初始化dp数组，将内容全部初始化为0
    // 一共有 2 * k + 1 种状态
    // 1、保持不变
    // 2、第i次买入（这个值全部为奇数项，初始值全部为 -prices[0]）
    // 3、第i次卖出
    let dp = Array.from(Array(prices.length), () => Array(2 * k + 1).fill(0));
    
    // 值初始化，由以上可知，奇数项初始化为-prices[0]
    for (let j = 1; j < 2 * k; j += 2) {
        dp[0][j] = 0 - prices[0];
    }
    
    // 动态转移方程
    for (let i = 1; i < prices.length; i++) {
        for (let j = 0; j < 2 * k; j++) {
            dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i - 1][j] - prices[i]);
            dp[i][j + 2] = Math.max(dp[i - 1][j + 2], dp[i - 1][j + 1] + prices[i]);
        }
    }

    return dp[prices.length - 1][2 * k];
};