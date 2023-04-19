/**
 * 左闭右开 [left, right)
 * 
 * 这里直接返回 right 即可，由于 right 为开，所以返回时候直接返回 right 就可以了
 * 这里返回的结果：right 的范围是 0 - nums.length，符合取值范围（left、right不相等，所以mid不可能为0）
 * 当target小于最小值 r 为 0，大于最大值时 r 为 nums.length
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert1 = function (nums, target) {
  let mid,
    left = 0,
    right = nums.length
  while (left < right) {
    mid = Math.floor(left + ((right - left) / 2));
    if (nums[mid] > target) {
      right = mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      return mid;
    }
  }
  return right;
};


/**
 * 左闭右闭[left, right]
 * mid为0的情况下，right 可能为 - 1，并且 right 的值最大也只能到达 nums.length
 * 不满足区间条件，所以为了满足 [0, nums.length] 区间，这里返回的 right 得加一
 */
var searchInsert2 = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  // 当 left、right 相等时，mid 可能是为0的
  let mid
  while (left <= right) {
    mid = Math.floor(left + ((right - left) / 2))
    const midVal = nums[mid]
    if (midVal < target) {
      left = mid + 1
    } else if (midVal > target) {
      right = mid - 1
    } else {
      return mid
    }
  }
  return right + 1
}
console.log(searchInsert2([1, 3, 5, 6], 8));