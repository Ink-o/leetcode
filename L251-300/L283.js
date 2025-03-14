/**
 * https://leetcode.cn/problems/move-zeroes/solutions/90229/dong-hua-yan-shi-283yi-dong-ling-by-wang_ni_ma/?envType=study-plan-v2&envId=top-100-liked
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  // 基准元素索引
  let slow = 0
  for (let i = 0; i < nums.length; i++) {
    // 将不等于 0 的元素都放到基准元素左侧
    if (nums[i] !== 0) {
      const tmp = nums[i]
      nums[i] = nums[slow]
      nums[slow] = tmp
      slow++
    }
  }
}
