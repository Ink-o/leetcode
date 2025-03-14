/**
 * @param {number[]} nums
 * @return {number}
 */
function findLengthOfLCIS(nums) {
  // dp[i] 表示 第 i 个位置的连续递增子序列长度最长为 dp[i]
  const dp = Array.from({ length: nums.length }).fill(1)
  let result = 1

  for (let i = 0; i < nums.length - 1; i++) {
    // 如果出现连续子序列，则更新下一个nums[i + 1]的值
    if (nums[i] < nums[i + 1]) {
      dp[i + 1] = dp[i] + 1
      // 更新最后结果
      result = Math.max(result, dp[i + 1])
    }
  }
  return result
}
