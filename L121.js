/**
 * @param {number[]} prices
 * @return {number}
 * 贪心解法，找到最小的买入值，不断更新res值并且取其最大值
 */
var maxProfit = function(prices) {
    let left = prices[0];
    let res = 0;
    
    // 遍历股票
    for (let i = 1; i < prices.length; i++) {
        const cur = prices[i];

        // 更新取得的最大收益值
        res = Math.max(res, cur - left);
        // 更新买入的最小值
        left = Math.min(left, cur);
    }
    return res;
};

/**
 * @param {number[]} prices
 * @return {number}
 * 动态规划做法
 */
var maxProfit = function(prices) {
    // dp[i][0]表示第i天持有股票的最大收益（相当于买入的最小值）
    // dp[i][1]表示第i天不持有股票的最大收益（相当于卖出去的最大值）
    let dp = new Array(prices.length).fill([0, 0]);

    // dp[0][0]初始化为-prices[0]，相当于买入了第一天的股票
    // dp[0][1]初始化为0，因为没办法卖出，所以收益为0
    dp[0] = [
        -prices[0],
        0
    ];

    for (let i = 1; i < prices.length; i++) {
        // 更新第i天不持有股票的最大收益
        dp[i][1] = Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]);
        // 更新第i天持有股票的最大收益
        dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);
    }

    return dp[prices.length - 1][1];
};