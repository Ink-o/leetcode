/**
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrent(nums) {
  const map = new Map()
  const arr = [...nums]
  const res = []
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    // 只需要记录第一次出现的元素当前的索引值作为 比其前面小的元素
    // 以元素为key，比其前面小的元素为value
    if (!map.has(arr[i])) {
      map.set(arr[i], i)
    }
  }

  // 再次循环一遍数组赋值即可
  for (let i = 0; i < nums.length; i++) {
    res[i] = map.get(nums[i])
  }
  return res
}
