/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// 视频讲解
// https://www.bilibili.com/video/BV1S3411e7C8?spm_id_from=333.337.search-card.all.click
function longestCommonSubsequence(text1, text2) {
  // 长度为[0, i - 1]的字符串text1与长度为[0, j - 1]的字符串text2的最长公共子序列为dp[i][j]
  // 第 0 行 0 列都初始化值为0
  const dp = Array.from(Array.from({ length: text1.length + 1 }), () => Array.from({ length: text2.length + 1 }).fill(0))

  // dp[i][j] 的推导主要依赖于 dp[i - 1][j]、dp[i][j - 1]、dp[i - 1][j - 1]。所以谁先谁后都没问题
  // 行
  for (let i = 1; i <= text1.length; i++) {
    // 列
    for (let j = 1; j <= text2.length; j++) {
      // [j - 1] 和 [i - 1] 值相等的时候，直接取先前的值 + 1，先前的值是已经计算好了的
      if (text1[i - 1] === text2[j - 1]) {
        // 长度为[0, i - 2]的字符串text1与长度为[0, j - 2]的字符串text2的最长公共子序列为dp[i - 1][j - 1]
        dp[i][j] = dp[i - 1][j - 1] + 1
        continue
      }
      // 如果两者的值不相等，则直接寻找上方和左方的值的最大值，寻找一个组合的值，因为值不匹配，所以需要寻找之前的最大值
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }
  // 直接返回最后一项
  return dp[text1.length][text2.length]
}
