/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2) {
  // 初始化dp
  // dp[i][j] 的意思是 word1在[0, i - 1] 和 word2在[0, j - 1]范围内 word1 转化成 word2 所使用的的最少操作数
  const dp = Array.from(Array.from({ length: word1.length + 1 }), () => Array.from({ length: word2.length + 1 }).fill(0))

  // 初始化第1列
  // 此时word1为空，转化成word2，需要不断往里添加字符串
  for (let i = 1; i <= word1.length; i++) {
    dp[i][0] = i
  }

  // 初始化第1行
  // 此时word1不为空，转化成空字符串，需要不断的进行删除
  for (let j = 1; j <= word2.length; j++) {
    dp[0][j] = j
  }

  // 题解链接：https://leetcode.cn/problems/edit-distance/solution/zi-di-xiang-shang-he-zi-ding-xiang-xia-by-powcai-3/

  // 对“dp[i-1][j-1] 表示替换操作，dp[i-1][j] 表示删除操作，dp[i][j-1] 表示插入操作。”的补充理解：
  // 以 word1 为 "horse"，word2 为 "ros"，且 dp[5][3] 为例，即要将 word1的前 5 个字符转换为 word2的前 3 个字符，也就是将 horse 转换为 ros，因此有：
  // (1) dp[i-1][j-1]，即先将 word1 的前 4 个字符 hors 转换为 word2 的前 2 个字符 ro，然后将第五个字符 word1[4]（因为下标基数以 0 开始） 由 e 替换为 s（即替换为 word2 的第三个字符，word2[2]）

  // (2) dp[i][j-1]，即先将 word1 的前 5 个字符 horse 转换为 word2 的前 2 个字符 ro，然后在末尾补充一个 s，即插入操作

  // (3) dp[i-1][j]，即先将 word1 的前 4 个字符 hors 转换为 word2 的前 3 个字符 ros，然后删除 word1 的第 5 个字符
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      // 两者相等时不做任何操作
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      }
      else {
        // 执行增加或删除或替换操作，然后取最小值加1
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
      }
    }
  }

  return dp[word1.length][word2.length]
}
