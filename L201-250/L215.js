/**
 * 堆排
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let len = nums.length;
  for (let i = nums.length - 1; i >= 0; i--) {
    heapify(nums, i, nums.length);
  }
  while (k--) {
    // 第一个元素和最后一个元素替换
    swap(nums, 0, --len);
    // 然后再进行排序，不断缩小长度
    heapify(nums, 0, len);
  }
  return nums[len];

  function heapify(arr, index, size) {
    let child = 2 * index + 1;
    // 下沉操作
    while (child < size) {
      let largeSet = (child + 1 < size) && arr[child + 1] > arr[child] ? child + 1 : child;
      largeSet = arr[index] > arr[largeSet] ? index : largeSet;
      if (largeSet === index) {
        break;
      }
      swap(arr, largeSet, index);
      index = largeSet;
      child = 2 * index + 1;
    }
  }
  function swap(arr, a, b) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }
};
console.log(findKthLargest([1, 3, 7, 5], 2));


/**
 * 快速选择排序，解释看 quickSort.js
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  function quickSort(nums, start, end) {
    if (start >= end) return nums[start]
    const index = partition(nums, start, end)

    // 这里得到分界 index 后，根据返回来的索引，来对不同的情况进行排列
    if (index === k - 1) return nums[index]
    // 索引大于 k - 1 时，只排列左边的数组
    if (index > k - 1) {
      return quickSort(nums, start, index - 1)
    }
    // 索引小于 k - 1 时，只排列左边的数组
    return quickSort(nums, index + 1, end)
  }
  function partition(nums, start, end) {
    const pivotIndex = Math.floor((end - start) * Math.random()) + start
    const pivotVal = nums[pivotIndex];
    [nums[pivotIndex], nums[end]] = [nums[end], nums[pivotIndex]]

    let finalIndex = start
    for (let i = start; i < end; i++) {
      // 从大到小进行排序，这样返回的结果就一定是第 n 大的结果
      if (nums[i] > pivotVal) {
        [nums[i], nums[finalIndex]] = [nums[finalIndex], nums[i]]
        finalIndex++
      }
    }
    [nums[finalIndex], nums[end]] = [nums[end], nums[finalIndex]]
    return finalIndex
  }
  return quickSort(nums, 0, nums.length - 1)
};