/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
  // 最大值记录
  let max = nums[0]

  // 这里使用 2 个变量来记录截止到 i 索引时的最小值和最大值
  let minF = nums[0]
  let maxF = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i]
    // 当前取值可以是上一个的最小值 * 当前值（都是负数）
    const val1 = minF * cur
    // 当前取值可以是上一个的最大值 * 当前值（都是正数）
    const val2 = maxF * cur

    // 更新处理当前索引的最大值和最小值，或者可以从当前进行取值（从当前索引开始）
    minF = Math.min(val1, val2, cur)
    maxF = Math.max(val1, val2, cur)

    // 更新最大值
    max = Math.max(max, maxF)
  }
  return max
}
