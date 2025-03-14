/**
 * @param {number[]} nums
 * @return {boolean}
 * 思路：判断能不能收集总和的一半数值。可以使用01背包来对数值进行收集
 */
function canPartition(nums) {
  // 计算出总和
  const sum = nums.reduce((a, b) => a + b)

  // 判断是否为奇数，总和为奇数的话，就直接返回false
  if (sum & 1)
    return false

  const mid = sum / 2

  // 初始化dp数组，长度为总数和的一半（dp[i]表示 i 容量的背包最多能放dp[i]的数字总和）
  const dp = Array.from({ length: mid + 1 }).fill(0)

  // 遍历物品
  for (let i = 0; i < nums.length; i++) {
    // 遍历背包，从尾部开始遍历
    for (let j = mid; j >= nums[i]; j--) {
      // 更新背包数值
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
    }
  }

  // 如果背包能成功收集到mid数值，则直接返回true
  return dp[dp.length - 1] === mid
}
canPartition([1, 5, 11, 5])
