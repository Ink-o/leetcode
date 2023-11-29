/**
 * @param {number[]} cost
 * @return {number}
 * 实现思路：要么第一步需要花费，要么第一步不需要花费，以这两个角度来进行dp的初始化
 * 空间复杂度为0(n)
 */
var minCostClimbingStairs = function (cost) {
  // 初始化dp，默认第一第二步不需要消费，所以初始化为 0
  // dp[i] 的含义是到第 i 台阶梯所需要花费的最少体力
  let dp = [0, 0];

  // 题目要求的是楼梯顶部，也就是 cost.length，而不是 cost.length - 1
  for (let i = 2; i <= cost.length; i++) {
    // 确认递推公式，前两步的最小值+当前步花费值
    // 可以从 2 个途径得到 dp[i]，一个是dp[i-1] 一个是dp[i-2]。因为一次性只能跳 1 步 或者 2 步
    // 那么究竟是选从dp[i - 1]跳还是从dp[i - 2]跳呢？
    // 一定是选最小的，所以dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[cost.length]
};