/**
 * @param {number} n
 * @return {number}
 */
function numTrees(n) {
  // 1到i为节点组成的二叉搜索树的个数为dp[i]。
  const dp = Array.from({ length: n + 1 }).fill(0)
  // dp初始化0和1的位置为1，如果不初始化为1的话，后面得到的结果将会为0
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      // 推导状态转移方程
      // 根据规则得到：dp[3] = (d[0] * dp[2]) + (dp[1] * dp[1]) + (dp[2] * dp[0])，然后使用两层for循环就可以得到结果了
      dp[i] += dp[i - j] * dp[j - 1]
    }
  }
  return dp[n]
}
console.log(numTrees(3))
