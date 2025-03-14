/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums1, nums2) {
  const stack = []
  const map = new Map()

  // 这里直接以nums2为对象，直接对nums2进行单调处理，map记录nums2中每一个比自己大的元素是哪个
  for (let i = 0; i < nums2.length; i++) {
    const topIndex = stack[stack.length - 1]
    while (stack.length && nums2[topIndex] < nums2[i]) {
      const index = stack.pop()
      // key 为 当前数值，value为比当前数值大的最近值
      map.set(nums2[index], nums2[i])
    }
    stack.push(i)
  }

  const res = []
  // 循环遍历nums1，获取结果数值，如果数值在map中不存在，则直接赋值为-1
  for (let j = 0; j < nums1.length; j++) {
    res[j] = map.get(nums1[j]) || -1
  }

  return res
}
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))
