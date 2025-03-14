/**
 * 常规写法，使用2个set来进行计算
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
  const nums1Set = new Set(nums1)
  const resSet = new Set()
  for (let i = 0; i < nums2.length; i++) {
    const cur = nums2[i]
    if (nums1Set.has(cur)) {
      resSet.add(cur)
    }
  }
  return [...resSet]
}
