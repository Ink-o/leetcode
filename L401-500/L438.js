/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const need = new Map()
  const window = new Map()

  for (let i = 0; i < p.length; i++) {
    const element = p[i];
    need.set(element, (need.get(element) || 0) + 1)
  }

  let left = 0
  let right = 0
  let valid = 0
  const res = []

  while (right <= s.length) {
    const cur = s[right]
    right++

    // 记录目标字符串的map
    if (need.has(cur)) {
      window.set(cur, (window.get(cur) || 0) + 1)
      if (window.get(cur) === need.get(cur)) {
        valid++
      }
    }

    // 判断指针长度是否越界
    while (right - left > p.length) {
      const l = s[left]
      left++
      // 维护字典
      if (need.has(l)) {
        // 发现有数目对不上，valid直接 - 1
        if (window.get(l) === need.get(l)) {
          valid--
        }
        window.set(l, window.get(l) - 1)
      }
    }

    // 这里的 left 就是起点，不需要使用 right - p.length
    // 这里需要额外判断下是否相等
    if (valid === need.size) {
      res.push(left)
    }
  }
  return res
};