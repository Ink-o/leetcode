/**
 * 策略：起点从小到大排序。不断获取右边界节点。当右边界节点无法覆盖到下一个节点的时候，就另起一个边界
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  // 起点从小到大排序
  intervals.sort((a, b) => a[0] - b[0])
  const res = []

  // 当前区间起点和结束点
  let start = intervals[0][0]
  let end = intervals[0][1]

  for (let i = 0; i < intervals.length; i++) {
    // 当前收集的区间的右边界无法覆盖到当前区域的起点，需要进行收集
    // 然后更新起点区间
    if (end < intervals[i][0]) {
      res.push([start, end])
      start = intervals[i][0]
    }
    end = Math.max(end, intervals[i][1])
  }
  // 收集最后一个区间
  res.push([start, end])
  return res
}
