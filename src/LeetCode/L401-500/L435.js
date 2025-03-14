/**
 * 贪心解法，记录无需被删除的区间数
 * @param {number[][]} intervals
 * @return {number}
 */
function eraseOverlapIntervals(intervals) {
  // 右边界从小到大排序
  intervals.sort((a, b) => {
    return a[1] - b[1]
  })
  // count 是无重叠的区间数量
  // 这里的count初始化为1，因为一开始就收录了i = 0，并且此时的end还未初始化
  let count = 1
  // 第一个末尾
  let end = intervals[0][1]

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i]
    // 当前的最小值大于或等于重叠区间的最大值的时候，这时候就不需要删除，这时候继续更新end区间
    if (interval[0] >= end) {
      end = interval[1]
      count += 1
    }
  }
  // 最后结果就是总长度-无需被删除的长度
  return intervals.length - count
}

/**
 * 贪心解法，记录需要被删除
 * @param {number[][]} intervals
 * @return {number}
 */
function eraseOverlapIntervals2(intervals) {
  // 右边界从小到大排序
  intervals.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1]
    }
    return a[0] - b[0]
  })
  // 当前的最大覆盖右边界
  let maxDistance = intervals[0][1]
  let res = 0
  for (let i = 1; i < intervals.length; i++) {
    // 当前最大区间覆盖到了下一个区间了，记录被删除个数
    if (maxDistance > intervals[i][0]) {
      res++
      continue
    }
    // 更新右侧最大范围
    maxDistance = intervals[i][1]
  }
  return res
}
