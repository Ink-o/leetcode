/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const cur = []
  const res = []
  function process(start, pre) {
    if (pre === n && cur.length === k) {
      res.push([...cur])
      return
    }
    // 剪枝：
    // n - pre：当前的值不能大于还差的值
    // 9 - (k - cur.length) + 1：最大的起始点索引
    for (let i = start; i <= 9 - (k - cur.length) + 1 && i <= n - pre; i++) {
      cur.push(i)
      process(i + 1, pre + i)
      cur.pop()
    }
  }
  process(1, 0)
  return res
};
console.log(combinationSum3(3, 9));