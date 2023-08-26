var permuteUnique = function (nums) {
  const cur = []
  const res = []
  const len = nums.length
  // 一开始得先进行排序，这样才能使用相邻元素比较是否出现相同元素 
  nums.sort((a, b) => a - b)
  function process(used) {
    if (cur.length === nums.length) {
      res.push([...cur])
      return
    }
    for (let i = 0; i < len; i++) {
      // 树层去重
      // !used[i - 1] 说明上一个元素已经被遍历完了，此时处于树层
      if (used[i - 1] !== true && i > 0 && nums[i] === nums[i - 1]) {
        continue
      }
      // 树枝去重，当 used[i] === false 时，说明在树枝上，这个元素被访问过了
      if (used[i] !== true) {
        // 这里以下标作为key，不要以元素作为key，因为可能会出现重复元素（虽然本题没有）
        used[i] = true
        cur.push(nums[i])
        process(used)
        cur.pop()
        used[i] = false
      }
    }
  }
  process([])
  return res
}
console.log(permuteUnique([3, 3, 0, 3]));