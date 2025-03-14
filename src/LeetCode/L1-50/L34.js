/**
 * https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/1980196/er-fen-cha-zhao-zong-shi-xie-bu-dui-yi-g-t9l9/?envType=study-plan-v2&envId=top-100-liked
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  // 这个二分一定会找到第目标元素第一次出现的下标位置
  function lowerBound(target) {
    let left = 0
    let right = nums.length
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (nums[mid] < target) {
        left = mid + 1
      }
      else {
        // 当 mid 值大于等于 target 的时候。right 指针一样会缩小，直到找到第一个出现的目标值
        right = mid
      }
    }
    return left
  }
  // 元素左边界
  const start = lowerBound(target)
  // 如果元素第一次出现的位置没找到，说明不存在结果，直接返回 -1
  if (nums[start] !== target) {
    return [-1, -1]
  }
  // 如果 start 存在的话，end 一定存在。这时候只需要找比 target 第一个大的数，然后再减去 1，就是寻找目标元素的右边界了
  const end = lowerBound(target + 1) - 1
  return [start, end]
}

/**
 * 这个方法时间复杂度是On的，不推荐
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function (nums, target) {
//   let result = [-1, -1],
//     left = 0,
//     right = nums.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + (right - left) / 2));
//     if (nums[mid] < target) {
//       left = mid + 1;
//     } else if (nums[mid] > target) {
//       right = mid - 1;
//     } else {
//       let leftNow = mid;
//       let rightNow = mid;
//       // 判断左右相邻的是否还有相同的数值
//       while (leftNow >= 0 && nums[leftNow] === target) {
//         result[0] = leftNow;
//         leftNow -= 1;
//       }
//       while (rightNow >= 0 && nums[rightNow] === target) {
//         result[1] = rightNow;
//         rightNow += 1;
//       }
//       return result;
//     }
//   }
//   return result;
// };
