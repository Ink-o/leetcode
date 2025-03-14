/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  if (nums.length < 3) {
    return []
  }
  const res = []
  // 结果从小到大排序
  nums.sort((a, b) => a - b)
  // 这里的i边界为什么是length - 2？因为 l 指针需要 i + 1
  for (let i = 0; i < nums.length - 2; i++) {
    // 剪枝操作，当第一项大于0的时候直接 break 掉即可
    if (nums[i] > 0)
      break
    // point点去重，这里需要保证2个i点不能重复，所以这里是判断和前一个不能重复
    // 不能判断 nums[i] === nums[i + 1]，因为这样 l 会被误去除 {-1, -1 ,2}
    if (i > 0 && nums[i] === nums[i - 1])
      continue
    const point = nums[i]
    let l = i + 1 // 左指针
    let r = nums.length - 1 // 右指针
    while (l < r) {
      // 去重复逻辑如果放在这里，0，0，0 的情况，可能直接导致 right<=left 了，从而漏掉了 0,0,0 这种三元组
      /*
      while (right > left && nums[right] == nums[right - 1]) right--;
      while (right > left && nums[left] == nums[left + 1]) left++;
      */
      const sum = point + nums[l] + nums[r]
      // 这里没有被结果收录，所以只需要右指针减一即可（sum 大于 0，需要右指针的值减少）
      if (sum > 0) {
        r--
        continue
      }
      // 这里没有被结果收录，所以只需要左指针减一即可（sum 小于 0，需要左指针的值增加）
      if (sum < 0) {
        l++
        continue
      }
      res.push([point, nums[l], nums[r]])
      // 这里被结果收录了，所以需要保证不能重复，前一个元素不能和之前使用过的元素相同
      // 被收录的情况下，左右指针都要至少进行移动一次
      while (l < r && nums[l] === nums[++l]) { }
      while (l < r && nums[r] === nums[--r]) { }
    }
  }
  return res
}
threeSum([-1, 0, 1, 2, -1, -4])
