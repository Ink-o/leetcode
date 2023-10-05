// 找出数组中的第 k 个最大的元素
function findKMaxNum(nums, k) {
  return quickSelectHelper(nums, 0, nums.length - 1, k)
}

/**
 * @param {*} nums 
 * @param {*} left 判断的左边界
 * @param {*} right 判断的右边界
 * @param {*} k 要寻找的第 k 个大的元素
 */
function quickSelectHelper(nums, left, right, k) {
  if (left === right) {
    return nums[left]
  }

  let pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left
  pivotIndex = patition(nums, left, right, pivotIndex)
  if (pivotIndex === k) {
    return nums[pivotIndex]
  } else if (pivotIndex > k) {
    return quickSelectHelper(nums, left, pivotIndex - 1, k)
  } else {
    return quickSelectHelper(nums, pivotIndex + 1, right, k)
  }
}

function patition(nums, left, right, pivotIndex) {
  let pivotVal = nums[pivotIndex];
  [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];

  let storeIndex = left
  for (let i = left; i <= right - 1; i++) {
    if (nums[i] > pivotVal) {
      [nums[storeIndex], nums[i]] = [nums[i], nums[storeIndex]];
      storeIndex++;
    }
  }

  [nums[right], nums[storeIndex]] = [nums[storeIndex], nums[right]];
  return storeIndex;
}

let nums = [3, 2, 1, 5, 6, 4];
let k = 2;
console.log(findKMaxNum(nums, k - 1)); // 输出第k个最大的元素