/**
 * 思路：求出最长回文子串，保存每次的最长长度，每次检测是否需要更新
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  const sLen = s.length

  // dp[i][j] 表示的是在[i, j]区间内是否为回文
  // 左边界为 i（y 轴），右边界为 j（x 轴）。调换过来是不行的，无法满足动态转移方程
  // 这里的遍历顺序是要一列一列的从上往下开始计算，不然 dp[i][j] 无法依赖 dp[i + 1][j - 1] 计算好的值
  // 动态转移方程：dp[i][j] = dp[i + 1][j - 1]
  const dp = Array.from(Array.from({ length: sLen }), () => Array.from({ length: sLen }).fill(false))

  // 最长长度初始化为 1，至少会为 1，s.length >= 1
  let maxLen = 1
  let begin = 0

  // 初始化：所有长度为 1 的子串都是回文串
  for (let i = 0; i < sLen; i++) {
    dp[i][i] = true
  }

  // 遍历顺序是每列从上往下开始遍历，每列的所有元素遍历完后再遍历下一列的
  // 遍历行。j 是终点
  for (let j = 1; j < sLen; j++) {
    // 遍历列，i 是起点
    for (let i = 0; i < j; i++) {
      if (s[i] !== s[j]) {
        dp[i][j] = false
      }
      else {
        // 边界条件： j - 1 - (i + 1) + 1 < 2 => j - i < 3
        // 记得要加 1 ，要不然 i，j 重叠的时候长度会为 0
        // 当 s[i...j]的长度为 2 或 3 的时候，就不用检查子串是否回文（因为剔除首尾后就剩 1 个或 0 个元素了）
        if (j - i < 3) {
          dp[i][j] = true
        }
        else {
          dp[i][j] = dp[i + 1][j - 1]
        }
      }

      // 只要 dp[i][j] == true 成立，就表示子串 s[i..L] 是回文，此时记录回文长度和起始位置
      // 记得要加 1 ，要不然 i，j 重叠的时候长度会为 0
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1
        begin = i
      }
    }
  }
  return s.substring(begin, begin + maxLen)
}
