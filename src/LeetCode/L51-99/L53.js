/**
 * @param {number[]} nums
 * @return {number}
 *  贪心的思路为局部最优：当前“连续和”为负数的时候立刻放弃，从下一个元素重新计算“连续和”，
    因为负数加上下一个元素 “连续和”只会越来越小。从而推出全局最优：选取最大“连续和”
 */
function maxSubArray(nums) {
  // 结果初始化为nums[0]，这里一定要使用一个最大数值来记录最大数，因为后面计算出来的结果不一定比前面要大
  let maxSum = nums[0]
  // 当前结果集初始化为0
  let curSum = 0
  // 注意这里是从0开始遍历
  for (let i = 0; i < nums.length; i++) {
    // 更新curSum和maxSum
    curSum += nums[i]

    maxSum = Math.max(curSum, maxSum)

    // 当curSum小于0的时候，进行重置数值，继续往后查找和计算数值
    if (curSum < 0) {
      curSum = 0
    }
  }
  return maxSum
}
console.log(maxSubArray([-2, -1]))

/**
 * @param {number[]} nums
 * @return {number}
 * 动态思路实现：未压缩 dp
 */
function maxSubArray1(nums) {
  // dp[i] 表示前n个连续子数组数值的最大和
  const dp = Array.from({ length: nums.length }).fill(0)
  // dp[0] 初始化为0
  dp[0] = nums[0]
  // 结果初始化为0
  let result = nums[0]

  for (let i = 1; i < nums.length; i++) {
    // dp[i] 的来源可以是以下两种
    // dp[i - 1] + nums[i]，即：nums[i]加入当前连续子序列和
    // nums[i]，即：从头开始计算当前连续子序列和
    // 结果一定是最大值
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])

    // 结果值取最大
    result = Math.max(result, dp[i])
  }
  return result
}

/**
 * 动态思路实现：压缩 dp。可以先看上面未压缩dp的
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray2(nums) {
  // num 表示当前 n 个连续子数组数值的最大和。初始化为第一项
  // 这里只需要保存当前 n 个连续子数组数组的最大和就行了
  let num = nums[0]
  // 结果初始化为0
  let maxNum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    const curNum = nums[i]
    // num 的来源可以是以下两种
    // num + curNum，即：curNum加入当前连续子序列和
    // num，即：从头开始计算当前连续子序列和
    // 结果一定是最大值
    num = Math.max(num + curNum, curNum)
    // 结果值取最大
    maxNum = Math.max(num, maxNum)
  }
  return maxNum
}
