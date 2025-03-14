/**
 * 核心点：记录增加步数后能达到的最大范围。在本次步数走不到终点的时候添加步数，以到达终点
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
  let curIndex = 0
  let nextIndex = 0
  let step = 0
  // 终点是百分百可以到达的，所以索引不需要到达最后一个，只需要覆盖到终点前一个即可
  for (let i = 0; i < nums.length - 1; i++) {
    // 更新下一步的最大覆盖范围
    nextIndex = Math.max(nextIndex, i + nums[i])
    // ⭐️只需要关注当前i是否到达了当前最大覆盖范围然后更新最大覆盖即可，如果i 可以到达 nums.length - 1 位置
    // 那么这里会进行重复计算
    if (i === curIndex) {
      step++
      curIndex = nextIndex
    }
  }
  return step
}

/**
 * 复杂写法，里面包含着是否能到达的逻辑
 * @param {number[]} nums
 * @return {number}
 */
function jump2(nums) {
  if (nums.length === 1)
    return 0
  let nextStep = 0
  let curStep = 0
  let ans = 0

  for (let i = 0; i < nums.length; i++) {
    nextStep = Math.max(nextStep, nums[i] + i)
    if (i === curStep) {
      ans++
      curStep = nextStep
      if (curStep >= nums.length - 1)
        return ans
    }
  }
  return ans
}
