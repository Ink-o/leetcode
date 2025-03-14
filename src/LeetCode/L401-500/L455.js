/**
 * 思路：大饼干喂饱胃口大的。
 * @param {number[]} g 胃口
 * @param {number[]} s 食物
 * @return {number}
 */
function findContentChildren(g, s) {
  // 胃口与食物从小到大排序
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  // 食物索引从最大的位置开始
  let sIndex = s.length - 1
  let count = 0

  // 从最大的胃口开始遍历，给予最大的食物
  for (let i = g.length - 1; i >= 0; i--) {
    // 如果当前饼干能满足当前孩子的胃口，则对饼干进行消耗
    if (g[i] <= s[sIndex] && sIndex >= 0) {
      // 数量 + 1
      count++
      // 食物数量索引减一
      sIndex--
    }
  }
  return count
}

/**
 * 思路：小饼干喂饱胃口小的。
 * @param {number[]} g 胃口
 * @param {number[]} s 食物
 * @return {number}
 */
function findContentChildren2(g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let gIndex = 0
  // 从最小的饼干开始遍历
  for (let i = 0; i < s.length; i++) {
    // 如果饼干满足情况，则孩子索引+1
    if (s[i] >= g[gIndex] && gIndex < g.length) {
      gIndex++
    }
  }

  return gIndex
}
findContentChildren([10, 9, 8, 7], [5, 6, 7, 8])
