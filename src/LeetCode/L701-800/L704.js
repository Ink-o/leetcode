/**
 * [l, r) 右边界不可达。left < right 边界确定，对于 right 的值，永远都是无效的，
 * 所以在不满足条件的时候对 right 的赋值是 mid，因为 mid 此时是无效的
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0
  let r = nums.length

  // 右边界不可达
  while (l < r) {
    const mid = Math.floor((l + r) / 2)
    if (nums[mid] === target)
      return mid

    // l 可达，直接设置为 mid + 1
    if (nums[mid] < target) {
      l = mid + 1
    }
    else { // ⭐️ 因为 r 不可达，所以直接设置为 mid（mid 无效）
      r = mid
    }
  }

  return -1
}

// right 可达，所以这里 right 是 nums.length - 1 索引初始值
var search = function (nums, target) {
  let mid
  let left = 0
  // r 可达，初始值设置为 nums.length - 1
  let right = nums.length - 1
  while (left <= right) {
    const val = nums[mid]
    mid = Math.floor((left + right) / 2)
    if (val > target) {
      // ⭐️ r 此时可达，直接设置为 mid - 1（此时 mid - 1 的值可能有效）
      right = mid - 1
      continue
    }
    if (val < target) {
      left = mid + 1
      continue
    }
    return mid
  }
  return nums[left] === target ? left : -1
}
console.log(search([-1, 0, 3, 5, 9, 12], 9))
