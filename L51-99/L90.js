/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const res = []
  const cur = []
  // 这里得先排序，从小到大进行排列，保证有序
  nums.sort((a, b) => a - b)
  function process(startIndex) {
    res.push([...cur])
    for (let i = startIndex; i < nums.length; i++) {
      // i > startIndex 代表在同一水平的树层，如果 nums[i] === nums[i - 1] 满足的话，则说明在同一水平的树层上出现了相同的元素
      if (i > startIndex && nums[i] === nums[i - 1]) {
        continue
      }
      cur.push(nums[i])
      process(i + 1)
      cur.pop()
    }
  }
  process(0)
  return res
};