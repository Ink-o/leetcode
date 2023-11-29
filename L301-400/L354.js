/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  if (envelopes.length === 0) {
    return 0
  }
  envelopes.sort((a, b) => {
    if (a[0] !== b[0]) {
      // w升序
      return a[0] - b[0]
    }
    // h降序
    return b[1] - a[1]
  })

  // 选择宽度最小，高度最高的元素放第一层，（后面遇到高度小的还可以继续逐步替换）
  // 这里的 f 其实就是一个最长递增子序列，首先放入最高度最高的信封，后面逐步进行替换
  const f = [envelopes[0][1]]

  for (let i = 1; i < envelopes.length; i++) {
    // 宽度一定能放的进。只需要比较高度
    const num = envelopes[i][1]
    // 高度适合，直接叠加
    if (num > f[f.length - 1]) {
      f.push(num)
    } else {
      // 否则，直接找到f中第一个比 num 大的索引，直接替换原本的值
      const index = binarySearch(f, num)
      f[index] = num
    }
  }
  return f.length
};
// 二分查找 f 中第一个比 target 大的索引
function binarySearch(f, target) {
  let l = 0
  let r = f.length
  while (l < r) {
    let mid = Math.floor((l + r) / 2)
    if (f[mid] < target) {
      l = mid + 1
    } else {
      r = mid
    }
  }
  return l
}
maxEnvelopes([[5, 4], [6, 4], [6, 5], [6, 7], [2, 3]])