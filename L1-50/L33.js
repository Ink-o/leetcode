/**
 * 1. 只有在顺序区间内才可以通过区间两端的数值判断target是否在其中。
 * 2. 判断顺序区间还是乱序区间，只需要对比 left 和 right 是否是顺序对即可，left <= right，顺序区间，否则乱序区间。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) return mid

    // left 到 mid 是顺序区间
    if (nums[left] <= nums[mid]) {
      // 如果 目标值 大于等于 左指针（代表左指针不能移动，否则将可能错过值），并且 目标值小于 mid，则 右指针 往左移动
      //否则 左指针右移
      (target >= nums[left] && target < nums[mid]) ? right = mid : left = mid + 1
    } else {
      // mid 到 right 是顺序区间。注意：这里的 right 不可达，所以要 right - 1
      // 如果 目标值 小于等于 右指针 - 1（代表右指针不能移动，否则将可能错过值），并且 目标值比 mid 要大，则 左指针向右移动
      (target > nums[mid] && target <= nums[right - 1]) ? left = mid + 1 : right = mid
    }
  }
  return -1
};