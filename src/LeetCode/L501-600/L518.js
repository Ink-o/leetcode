/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 * 组合遵循先遍历物品后遍历背包
 */
function change(amount, coins) {
  //  初始化dp数组为amount + 1大小，并且全部初始为0
  // dp[j]表示为当价值为j的时候有dp[j]中拼凑方式
  const dp = Array.from({ length: amount + 1 }).fill(0)
  // 初始化dp，当价值为0的时候，总共有1中拼凑方式，那就是0
  dp[0] = 1

  // 题目要求组合数，不需要注意排列顺序，所以物品排在前面遍历
  for (let i = 0; i < coins.length; i++) {
    // 遍历物品
    for (let j = coins[i]; j <= amount; j++) {
      // 求组合数使用累加
      dp[j] += dp[j - coins[i]]
    }
  }
  return dp[amount]
}
