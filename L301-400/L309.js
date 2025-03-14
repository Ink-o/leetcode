/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  if (prices.length < 2) {
    return 0
  }
  else if (prices.length < 3) {
    return Math.max(0, prices[1] - prices[0])
  }

  const dp = Array.from(Array.from({ length: prices.length }), () => Array.from({ length: 4 }).fill(0))
  // 第一天买入股票所剩余的现金必定是为负数的，其他的卖出所得现金最少为0，所以全部初始化为0了
  dp[0][0] = 0 - prices[0]

  for (let i = 1; i < prices.length; i++) {
    // 买入
    // 情况一：前一天就是持有股票状态dp[i - 1][0]
    // 情况二：今天进行买入了
    // 2-1：前一天是冷冻期：dp[i - 1][3] - prices[i]
    // 2-2：前一天是卖出状态：dp[i - 1][1] - prices[i]
    // 所以买入状态就取这三个值的最大值
    dp[i][0] = Math.max(dp[i - 1][0], Math.max(dp[i - 1][1], dp[i - 1][3]) - prices[i])

    // 卖出（两天前就卖出了股票，渡过了冷冻期，一直没操作，保持卖出股票状态）
    // 情况一：前一天就是卖出状态：dp[i - 1][1]
    // 情况二：前一天是冷冻期：dp[i - 1][3]
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3])

    // 卖出：今天卖出了股票
    // 只有一种情况：昨天刚买入，今天卖出：dp[i - 1][0] + prices[i]
    dp[i][2] = dp[i - 1][0] + prices[i]

    // 冷冻期：昨天就是卖出状态：dp[i - 1][2]
    dp[i][3] = dp[i - 1][2]
  }

  // 最后直接取三个状态值的最大值
  return Math.max(dp[prices.length - 1][1], dp[prices.length - 1][2], dp[prices.length - 1][3])
}
