/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const cur = []
  const res = []
  // startIndex：循环起点
  // pre：上次计算出来的结果
  function process(startIndex, pre) {
    // 计算结果大于 target 则终止循环
    // if (pre > target) return
    if (pre === target) {
      res.push([...cur])
      return
    }
    // 从 startIndex 开始循环
    for (let i = startIndex; i < candidates.length; i++) {
      const ele = candidates[i]
      // 进栈
      cur.push(ele)
      // ⭐️i 设置为初始起点，表示当前元素可以重复选取，一直到 pre > target
      // 值累加
      process(i, pre + ele)
      // 出栈
      cur.pop()
    }
  }
  process(0, 0)
  return res
};