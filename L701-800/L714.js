/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 * 贪心思路
 */
var maxProfit = function (prices, fee) {
  let result = 0

  // 这里的初始化购买是没有扣除手续费的
  let minPrice = prices[0]

  for (let i = 1; i < prices.length; i++) {
    // 当前价格小于最小价格，进行买入
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    }

    // 价格+手续费大于价格，此时不买不卖
    if (prices[i] > minPrice && prices[i] < minPrice + fee) {
      continue
    }

    // 此时进行卖出
    if (prices[i] > minPrice + fee) {
      // 计算收益
      result += prices[i] - minPrice - fee

      // 重新买入，直接扣除手续费
      minPrice = prices[i] - fee
    }
  }
  return result
}
console.log(maxProfit([1, 3, 2, 8, 4, 9], 2))

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 * 动态规划思路
 */
var maxProfit = function (prices, fee) {
  const dp = Array.from(Array.from({ length: prices.length }), () => Array.from({ length: 2 }).fill(0))

  // 初始化dp, dp[i][0]表示第i天持有股票所省最多现金。dp[i][1]表示第i天不持有股票所得最多现金
  dp[0][0] = -prices[0]

  for (let i = 1; i < prices.length; i++) {
    // 第i天持有股票所省最多现金，可以由2个状态推出来，结果值取2个值的最大值
    // 第一个，保持原有 dp[i - 1][0]
    // 第二个，进行买入 dp[i - 1][1] - prices[i]
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])

    // 第i天不持有股票所获得最大现金，可以由2个状态推出来
    // 第一个，保持原有 dp[i - 1][1]
    // 第二个，进行卖出 dp[i - 1][0] + prices[i] - fee，这里需要扣除手续费
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee)
  }

  // 对第i天不持有股票获得的最大现金进行返回
  return dp[prices.length - 1][1]
}
console.log(maxProfit([1, 3, 2, 8, 4, 9], 2))
