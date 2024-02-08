/**
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
    if (nums[mid] === target) return mid

    // l 可达，直接设置为 mid + 1
    if (nums[mid] < target) {
      l = mid + 1
    } else {
      // 因为不可达，所以直接设置为 mid
      r = mid
    }
  }

  return -1
};

var search = function (nums, target) {
  let mid;
  let left = 0;
  // r 可达，初始值设置为 nums.length - 1
  let right = nums.length - 1;
  while (left <= right) {
    let val = nums[mid];
    mid = Math.floor((left + right) / 2);
    if (val > target) {
      // r 此时可达，直接设置为 mid - 1
      right = mid - 1;
      continue;
    }
    if (val < target) {
      left = mid + 1;
      continue;
    }
    return mid;
  }
  return nums[left] === target ? left : -1;
};
console.log(search([-1, 0, 3, 5, 9, 12], 9));