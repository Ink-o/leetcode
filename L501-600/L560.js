/**
 * 前缀和思路，与两数相加一样
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // 这个 mp 主要是记录和为 k 的组合数有 v 种
  const mp = new Map()
  // 记录一个前缀和为 0 的次数，兼容刚好 pre = k 的情况
  mp.set(0, 1)
  let count = 0, pre = 0
  for (const x of nums) {
    // 前缀和累加
    pre += x
    // 当有前缀和刚好与 k 相等的情况下，直接进行值累加，因为前面已经把值计算过了
    if (mp.has(pre - k)) {
      count += mp.get(pre - k)
    }

    // 更新前缀和为 pre 的次数
    mp.set(pre, (mp.get(pre) || 0) + 1)
  }

  return count
};