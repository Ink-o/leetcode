/**
 * 标准贪心，找出重叠部分的最小右边界
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  // 箭的起点从小到大排列
  points.sort((a, b) => a[0] - b[0]);
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    // 发出去的箭覆盖不到当前气球的七点，再发一支
    if (points[i][0] > points[i - 1][1]) {
      result++;
    } else {
      // 找出当前重叠最小右边界，并且进行更新
      points[i][1] = Math.min(points[i - 1][1], points[i][1])
    }
  }
  return result;
};


/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  let count = 1;

  // 贪心策略，将数组中的最右边界从小到大进行排序，然后每次射箭都取最右边界，判断有没有覆盖到下一个数组的范围
  // 没有则需要声明新的箭。有的话则无需声明新的箭
  points.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  let maxDistance = points[0][1]
  for (let i = 1; i < points.length; i++) {
    // 如果当前射出去的箭的最大范围到达不了当前气球的起点，则再发射一支
    if (maxDistance < points[i][0]) {
      count++
      // 更新最大右边界范围
      maxDistance = points[i][1]
    }
  }
  return count
};
