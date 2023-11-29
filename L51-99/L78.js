/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const cur = []
  const res = []
  function process(startIndex) {
    // 不需要指定递归出口，递归前都进行收集一遍，直接递归完毕收集
    res.push([...cur])
    for (let i = startIndex; i < nums.length; i++) {
      // 回溯
      cur.push(nums[i])
      // 这里传递的是 i + 1，切记，否则会收集到重复的元素
      process(i + 1)
      cur.pop()
    }
  }
  process(0)
  return res
};
console.log(subsets([1, 2, 3]));