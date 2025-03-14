/**
 * 题解：https://leetcode.cn/problems/rotate-array/solutions/683855/shu-zu-fan-zhuan-xuan-zhuan-shu-zu-by-de-5937/?envType=study-plan-v2&envId=top-100-liked
 * 思路：整体翻转，再对 k 部分进行反转。然后再对 k 后面的部分进行反转
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  const reverse = (start, end) => {
    while (start < end) {
      [nums[start++], nums[end--]] = [nums[end], nums[start]]
    }
  }
  // 将 k 模余长度，因为 k 可能比 nums.length 要长
  // 当 k 为 len + 1 的时候，实际上和反转一次的效果是一样的
  if (k > nums.length) {
    k = k % nums.length
  }
  // 先将整个数组进行反转
  reverse(0, nums.length - 1)
  // k - 1 到 len 的部分进行反转（也就是现在的 0 到 k - 1）
  reverse(0, k - 1)

  // 原始部分也进行反转
  reverse(k, nums.length - 1)
}
