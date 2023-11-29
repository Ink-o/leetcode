/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    // 中点比右边的值要小的话，则直接省略右边的值（中点到右边属于递增）
    if (nums[mid] < nums[right]) {
      right = mid
    } else {
      // 中点比右边的值边的值要大的话，则直接省略左边的值（中点到右边属于递减）
      left = mid + 1
    }
  }
  return nums[left]
};