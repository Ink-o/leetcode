/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
function fourSumCount(nums1, nums2, nums3, nums4) {
  const twoSumMap = new Map()
  let count = 0
  // 先计算数组1和数组2的总和放入到map中
  for (const n1 of nums1) {
    for (const n2 of nums2) {
      const sum = n1 + n2
      twoSumMap.set(sum, (twoSumMap.get(sum) || 0) + 1)
    }
  }

  // 后再计算数组2和数组3的总和，判断map中是否有数值能与其相加为0的情况
  for (const n3 of nums3) {
    for (const n4 of nums4) {
      const sum = n3 + n4
      count += (twoSumMap.get(0 - sum) || 0)
    }
  }
  return count
}
