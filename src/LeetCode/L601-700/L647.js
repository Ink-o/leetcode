/**
 * @param {string} s
 * @return {number}
 * 动态规划
 */
function countSubstrings(s) {
  const dp = Array.from(Array.from({ length: s.length }), () => Array.from({ length: s.length }).fill(false))
  let result = 0

  // 从后往前遍历
  for (let i = s.length - 1; i >= 0; i--) {
    // 以i为当前指针，一直遍历到最后
    for (let j = i; j <= s.length - 1; j++) {
      if (s[i] === s[j]) {
        // 用j减去i，判断两者之间的距离
        if (j - i < 2) {
          // 如果两者相差的数值不大于2，则这个就是一个回文子串了
          dp[i][j] = true
        }
        else {
          // 如果两个值相差大于2，则需要将左指针(i)和右指针(j)分别往右和左移动一位
          // 这里需要用到后面计算好的结果
          dp[i][j] = dp[i + 1][j - 1]
        }
        // 如果当前结果为true，则在后面加上1
        result += dp[i][j] ? 1 : 0
      }
    }
  }
  return result
}

/**
 * @param {string} s
 * @return {number}
 * 双指针做法
 */
function countSubstrings2(s) {
  let result = 0
  for (let i = 0; i < s.length; i++) {
    // 左右指针有两种情况
    // 1、只有1个中心点：i
    // 2、有2个中心点：i、i+1

    // 按理来说中心点有n个，但是奇数的中心点可以由1个中心点推出，偶数的中心点可以由2个中心点推出
    result += extend(s, i, i, s.length)
    result += extend(s, i, i + 1, s.length)
  }
  return result

  /**
   * 使用双指针解决回文子串长度
   * @param {string} s 目标字符串
   * @param {number} i 中心点1
   * @param {number} j 中心点2
   * @param {number} n 字符串长度
   * @returns 回文子串长度
   */
  function extend(s, i, j, n) {
    let res = 0
    // i为左指针
    // j为右指针
    // 循环，i 左移动，j 右移动，当两者相等时，记录进行增加
    while (i >= 0 & j < n && s[i] === s[j]) {
      i--
      j++
      res++
    }

    return res
  }
}
console.log(countSubstrings2('1234'))
