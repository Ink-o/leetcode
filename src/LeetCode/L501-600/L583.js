/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2) {
  //  初始化dp数组，dp[i][j] 表示 word1 在 [0, i - 1] 和 word2 在 [0, j - 1] 范围里相同的最长子序列为 dp[i][j]
  const dp = Array.from(Array.from({ length: word1.length + 1 }), () => Array.from({ length: word2.length + 1 }).fill(0))
  // 求解word1和word2的最长相同子序列
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      }
      else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  const sameLength = dp[word1.length][word2.length]

  // 结果为两个子串的长度相加 - 2倍最长相同子序列，这个就是需要删除的元素
  return (word1.length + word2.length) - 2 * sameLength
}
