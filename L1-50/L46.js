/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const cur = []
  const res = []
  function process(used) {
    if (cur.length === nums.length) {
      res.push([...cur])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      // 在本次树枝中元素已经被访问过了，直接跳过本次循环
      // 这里以下标作为key，不要以元素作为key，因为可能会出现重复元素（虽然本题没有）
      if (used[i] === true) continue
      const element = nums[i];
      // 回溯
      used[i] = true
      cur.push(element)
      process(used)
      cur.pop()
      used[i] = false
    }
  }
  process([])
  return res
};