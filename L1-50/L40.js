/**
 * 核心：同一树层上的节点要进行去重，树枝上的节点不用处理
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const cur = []
  const res = []
  // 要在同一数层上进行去重，原数组得先进行排序
  candidates.sort((a, b) => a - b)
  // startIndex：循环起点
  // pre：上次计算出来的结果
  function process(startIndex, pre) {
    // 计算结果大于 target 则终止循环
    if (pre === target) {
      res.push([...cur])
      return
    }
    // 从 startIndex 开始循环
    for (let i = startIndex; i < candidates.length; i++) {
      // 这里需要保证树的平级所用到的元素不能一样，当 i > startIndex 时，说明此时进行的是树的平级比对
      if (i > startIndex && candidates[i] === candidates[i - 1]) {
        continue
      }
      const ele = candidates[i]
      if (ele + pre > target) {
        break
      }
      // 进栈
      cur.push(ele)
      // ⭐️i 设置为初始起点，表示当前元素可以重复选取，一直到 pre > target
      // 值累加
      process(i + 1, pre + ele)
      // 出栈
      cur.pop()
    }
  }
  process(0, 0)
  return res
};