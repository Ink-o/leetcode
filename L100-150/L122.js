// 贪心卖法
// 问题分解：
// 假如第0天买入，第3天卖出，那么利润为：prices[3] - prices[0]。
// 相当于(prices[3] - prices[2]) + (prices[2] - prices[1]) + (prices[1] - prices[0])。

// 这里的贪心只取正数来进行累加
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    // 正数卖出才算是盈利
    profit = profit + Math.max(prices[i] - prices[i - 1], 0);
  }
  return profit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));


// 动态规划，这里进行了状态压缩
var maxProfit1 = function (prices) {
  let dp = [];
  // 第i天持有股票所得现金
  dp[0] = -prices[0];
  // 第i天不持有股票所得最多现金
  dp[1] = 0;

  for (let i = 1; i < prices.length; i++) {
    // 更新持有股票第i天所得现金，其中有可能进行股票购买，这时候就需要使用 第i天不持有股票金额 - 股票价格
    // 有可能买，也有可能不买（用不持有股票的现金去购买）
    dp[0] = Math.max(dp[0], dp[1] - prices[i]);
    // 更新未持有股票最大收益，这时候可能进行股票售卖，或者不进行售卖。看收益增了还是减了
    dp[1] = Math.max(dp[1], dp[0] + prices[i]);
  }

  return dp[1];
}
console.log(maxProfit1([7, 1, 5, 3, 6, 4]));