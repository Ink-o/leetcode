// 快速排序
function quickSort(nums, start, end) {
  if (start >= end) return nums
  // 获取分区元素索引，这个分区元素对应的元素的顺序就已经排序好了
  const index = patition(nums, start, end)
  // 对分区元素左边的剩余数组进行排序
  quickSort(nums, start, index - 1)
  // 对分区元素右边的剩余数组进行排序
  quickSort(nums, index + 1, end)
}
function patition(nums, start, end) {
  // 随机挑选一个索引当基准元素
  let pivotIndex = Math.floor((end - start) * Math.random()) + start
  const pivotVal = nums[pivotIndex];
  // 将基准元素与最后一个元素替换，为了后续方便对比
  [nums[end], nums[pivotIndex]] = [nums[pivotIndex], nums[end]]

  // 替换元素指针
  let startIndex = start

  // 在 [start, end) 区间内进行对比，end 不进行对比，因为 end 是基准元素
  for (let i = start; i < end; i++) {
    const val = nums[i];
    // 如果当前元素比基准元素要小，当前元素就与替换元素指针对应的元素进行替换
    // 然后替换元素指针自增 1（这就相当于 val 移动到了 startIndex 的左边了，确认比基准元素小的元素在左边）
    // 将比基准元素小的元素移动到 pivotIndex 的左边
    if (val < pivotVal) {
      [nums[i], nums[startIndex]] = [nums[startIndex], nums[i]]
      startIndex++
    }
  }

  // 最后将替换元素指针与 end 指针元素替换
  // 为什么可以直接替换？因为 end 元素 和 替换元素 都是大于等于替换元素的，所以这里可以直接替换，并且不会影响到最终结果
  // 也就是在 startIndex 左边的依旧还是小于 nums[startIndex] 的，在右边的元素还是大于等于 startIndex 的
  [nums[end], nums[startIndex]] = [nums[startIndex], nums[end]]
  return startIndex
}
const nums = [3, 2, 1, 5, 6, 4]
quickSort(nums, 0, nums.length - 1)
console.log('nums: ', nums);