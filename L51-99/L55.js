/**
 * 跳几步无所谓，关键在于可跳的覆盖范围！不断更新跳跃可到达的范围，只要最终可以达到终点即可
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  // 长度为1是必定可以到达的
  if (nums.length === 1)
    return true

  // 可跳范围初始化为0
  let range = 0

  // 这个范围是闭合的
  for (let i = 0; i <= range; i++) {
    // 更新最大可跳范围（这里更新的是索引）
    range = Math.max(range, i + nums[i])
    // 当范围超过了最后一个索引的时候，直接返回true
    if (range >= nums.length - 1) {
      return true
    }
  }
  return false
}
console.log(canJump([3, 2, 1, 0, 4]))
