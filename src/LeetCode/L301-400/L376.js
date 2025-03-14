/**
 * 贪心。计算峰值的个数
 * 1. 上下坡中有平坡（忽略左边的所有平坡，即忽略 curDiff 为 0 的情况）
 * 2. 数组首尾两端 默认 preDiff 为 0，默认最右边有一个顶峰
 * 3. 单调坡度有平坡：在遇到摆动变化的时候才更新 preDiff
 * @param {number[]} nums
 * @return {number}
 */
function wiggleMaxLength(nums) {
  if (nums.length <= 1) {
    return nums.length
  }
  let result = 1 // 坡度默认为 1，因为当元素长度大于 1 的时候，坡度最小为 1
  let preDiff = 0 // 上个差值
  let curDiff = 0 // 现在的差值

  for (let i = 0; i < nums.length - 1; i++) {
    // 计算实时的diff
    curDiff = nums[i + 1] - nums[i]
    // 当满足 curDiff 和 preDiff 任一个 大于0 和 小于0 的时候，结果值+1（遇到峰值）
    // 这里把 2 种情况都写进去了，上平 下/下平 上
    // 为 0 的情况就是遇到平坡的情况，这里统一忽略左边的平坡（即 curDiff 为 0 的时候跳过，只有 preDiff 可能为 0）
    if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
      result++
      // 更新preDiff，在遇到下一个合适的峰值时再更新 preDiff。解决前后结尾平坡与上升平坡
      preDiff = curDiff
    }
  }
  return result
}

/**
 * 动态规划解法
 * 核心点：将上升/下降的状态都保存起来，最后再比较大小
 * @param {number[]} nums
 * @return {number}
 */
function wiggleMaxLength1(nums) {
  const n = nums.length
  if (n < 2)
    return n
  // up[i] 记录以i截止的上升摆动的最大长度（最后一个上升的元素不一定在i）
  const up = Array.from({ length: n }).fill(0)
  // down[i] 记录以i截止的下降摆动的最大长度（最后一个下降的元素不一定在i）
  const down = Array.from({ length: n }).fill(0)
  // 这里默认最右边就有一个坡度，所以初始值为 1
  up[0] = down[0] = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      // 上升摆动
      // 情况1：连续的上升，不用当前元素，沿用之前的上升摆动长度值
      // 情况2：上升过程，从上一个下降摆动过来 + 当前元素 成为上升摆动
      up[i] = Math.max(up[i - 1], down[i - 1] + 1)
      // 上升过程中，下降摆动并未变化，所以沿用之前的值
      down[i] = down[i - 1]
    }
    else if (nums[i] < nums[i - 1]) {
      // 下降摆动
      // 情况1：连续的下摆，不用当前元素，沿用之前的下降摆动长度值
      // 情况2：下降过程，从上一个上升摆动过来 + 当前元素，成为下降摆动
      down[i] = Math.max(down[i - 1], up[i - 1] + 1)
      // 下升过程中，上升摆动并未变化，所以沿用之前的值
      up[i] = up[i - 1]
    }
    else {
      // !既不是上升也不是下降，直接沿用直接的值
      up[i] = up[i - 1]
      down[i] = down[i - 1]
    }
  }
  return Math.max(up[n - 1], down[n - 1])
}

/**
 * 上一个dp的简化版，先看上面的dp解法，这里是优化了up和down的内存
 * @param {number[]} nums
 * @return {number}
 */
function wiggleMaxLength2(nums) {
  if (nums.length === 1)
    return 1
  // i 以及之前的下摆最长长度
  let down = 1
  // i 以及之前的上升最长长度
  let up = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      // 下降
      // 情况1：从上一个上升的节点摆动过来，所以 up + 1
      // 情况2：从上一个下降的节点摆动过来，连续下降
      down = Math.max(up + 1, down)
    }
    if (nums[i] > nums[i - 1]) {
      // 上升
      // 情况1：从上一个上升的节点摆动过来，连续上升
      // 情况2：从上一个下降的节点摆动过来，所以 down + 1
      up = Math.max(down + 1, up)
    }
  }
  // 最后取前 i 个 上升/下降的最大值
  return Math.max(down, up)
}
console.log(wiggleMaxLength([1, 2, 3]))
