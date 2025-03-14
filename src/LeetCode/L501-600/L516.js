/**
 * @param {string} s
 * @return {number}
 */
function longestPalindromeSubseq(s) {
  // dp[i][j] 的意思的是 s 在 [i, j] 区间的最大回文子序列长度
  const dp = Array.from(Array.from({ length: s.length }), () => Array.from({ length: s.length }).fill(0))

  // 初始化值，在[i,i]区间的值必定为1，因为自己必定等于自己
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1
  }

  // 必须得倒序遍历，因为计算dp[i][j]的时候需要用到dp[i+1]的值，所以需要倒序计算
  for (let i = s.length - 1; i >= 0; i--) {
    // j的初始值为 i + 1，因为之前的值已经初始化完毕了，所以直接从 i + 1开始即可
    // 还有一个问题就是，j如果默认值不为i + 1的话，可能会产生数组越界
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        // 因为此题需要求解的是一个子序列问题，所以不需要注意间距问题，这是和  求解 子串的一个区别
        dp[i][j] = dp[i + 1][j - 1] + 2
      }
      else {
        // 当两个值不相等的时候，需要选取 i + 1 或 j - 1的中的最大值
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }
  // 返回
  return dp[0][s.length - 1]
}
