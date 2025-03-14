/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
  const res = []
  function process(start, cur = []) {
    if (cur.length >= k) {
      res.push([...cur])
      return
    }
    // 未变形边界为 n - i >= k - cur.length + 1（剩余的元素要大于 cur 所还需要的元素，为什么这里还需要+1，因为包含了起始位置）
    // 已经选择的元素：cur.length
    // 还需要的元素个数：k - cur.length + 1
    // 本次循环中还剩余的元素：n - i
    // k - cur.length 为离 cur.length === k 还差几个元素
    for (let i = start; i <= n - (k - cur.length) + 1; i++) {
      cur.push(i)
      process(i + 1, cur)
      cur.pop()
    }
  }
  process(1, [])
  return res
}
console.log(combine(4, 2))
