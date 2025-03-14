/**
 * https://leetcode.cn/problems/container-with-most-water/solutions/11491/container-with-most-water-shuang-zhi-zhen-fa-yi-do/?envType=study-plan-v2&envId=top-100-liked
 * 思路：双指针，从 开始 和 尾部开始，高度小的进行移动
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let l = 0
  let r = height.length - 1
  let area = 0
  while (l < r) {
    const lHeight = height[l]
    const rHeight = height[r]
    // 前后 2 根柱子，最小高度的作为高，横坐标作为宽
    // 取面积最大值
    area = Math.max(Math.min(lHeight, rHeight) * (r - l), area)
    if (lHeight < rHeight) {
      l++
    }
    else {
      r--
    }
  }
  return area
}
