/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
  const res = []
  // 从小到大排序
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    // i 去重
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    for (let j = i + 1; j < nums.length - 1; j++) {
      // ⭐️ j 去重，注意这里是 j - i > 1，因为要是 j 走过的轨迹
      // 如果只有 nums[j] === nums[j - 1] 这个条件的话，那么 i 走过的也会被算上
      if ((j - i) > 1 && nums[j] === nums[j - 1]) {
        continue
      }
      let left = j + 1
      let right = nums.length - 1
      // 双指针解法
      while (left < right) {
        const cur = nums[i] + nums[j] + nums[left] + nums[right]
        if (cur < target) {
          left++
          continue
        }
        if (cur > target) {
          right--
          continue
        }
        res.push([nums[i], nums[j], nums[left], nums[right]])
        // 左右指针移动
        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }
        left++
        right--
      }
    }
  }
  return res
}
fourSum([2, 2, 2, 2, 2], 8)
