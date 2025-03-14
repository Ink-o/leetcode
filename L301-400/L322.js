/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  // 初始化dp，dp[i]表示凑成i价值至少需要dp[i]个硬币
  const dp = Array.from({ length: amount + 1 }).fill(Infinity)
  // dp[0]初始化为0代表的是，凑成0元有0个硬币，实际上就是为了推导后面的价值
  // 说明中表示 coins 的元素一定是大于等于 1 的
  dp[0] = 0

  // 本题求钱币最小个数，那么钱币有顺序和没有顺序都可以，都不影响钱币的最小个数。
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j < amount + 1; j++) {
      // 需要用到的 dp[j - coins[i]] 值被初始化了才有意义，否则的话就代表 dp[j - coins[i]] 是无法组合成的
      // 实际上这个可以不加，因为 Infinity 必定是最大的
      if (dp[j - coins[i]] !== Infinity) {
        // 由于需要求最小值，所以这边取 Math.min(dp[j], dp[j - coins[i]] + 1)
        // 对比上次的凑成数 和 拆解后的凑成数 + 1（本次解法也算一个），看下谁的值小就取谁
        dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
      }
    }
  }
  // 值没有被更新，则说明没有办法完全组合
  if (dp[amount] === Infinity)
    return -1
  return dp[amount]
}
