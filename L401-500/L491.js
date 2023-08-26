/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const cur = []
  const res = []
  function process(startIndex, pre) {
    // cur的长度大于等于2，此时满足收集条件
    if (cur.length >= 2) {
      res.push([...cur])
    }
    // 声明1个set来判断本次水平循环是否有出现重复数字）
    // q：为什么不使用 nums[i] === nums[i - 1] 来判断？
    // a：因为数组并非有序
    const set = new Set()
    for (let i = startIndex; i < nums.length; i++) {
      const ele = nums[i]
      // 如果有重复的元素或者不是递增的序列，则跳过这次循环
      if (ele < pre || (i > startIndex && set.has(ele))) {
        continue
      }
      // set 添加元素
      set.add(ele)
      // 回溯
      cur.push(ele)
      process(i + 1, ele)
      cur.pop()
    }
  }
  // pre 初始化为负无穷
  process(0, -Infinity)
  return res
};
console.log(findSubsequences([4, 6, 7, 7]));