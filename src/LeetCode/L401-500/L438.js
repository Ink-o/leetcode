/**
 * 滑动窗口思想，当间隔大于 p.length 的时候，滑动窗口要开始移动
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const need = new Map()
  const window = new Map()

  // 记录 p 的子串出现次数
  for (let i = 0; i < p.length; i++) {
    const element = p[i]
    need.set(element, (need.get(element) || 0) + 1)
  }

  let left = 0
  let right = 0
  let valid = 0
  const res = []

  while (right < s.length) {
    const cur = s[right]
    right++

    // 当前遍历字符属于 p 的范围
    if (need.has(cur)) {
      // 记录出现次数
      window.set(cur, (window.get(cur) || 0) + 1)
      // 次数相等则记录 valid 有效数
      if (window.get(cur) === need.get(cur)) {
        valid++
      }
    }

    // 判断指针长度是否越界，越界的话，滑动窗口需要移动
    if (right - left > p.length) {
      const l = s[left]
      left++
      // 维护字典
      if (need.has(l)) {
        // 发现有数目先前可以对上的，valid直接 - 1。因为后面数量要变化了
        if (window.get(l) === need.get(l)) {
          valid--
        }
        window.set(l, window.get(l) - 1)
      }
    }

    // 这里的 left 就是起点，不需要使用 right - p.length
    // 这里需要额外判断下 valid 和 需要值数量是否相等
    if (valid === need.size) {
      res.push(left)
    }
  }
  return res
}

/**
 * 简单一点，但是时间复杂度这里会变成 On*m
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const pMap = new Map()
  const res = []
  for (let i = 0; i < p.length; i++) {
    const element = p[i]
    pMap.set(element, (pMap.get(element) || 0) + 1)
  }

  let slow = 0
  const windowMap = new Map()
  for (let i = 0; i < s.length; i++) {
    const cur = s[i]
    windowMap.set(cur, (windowMap.get(cur) || 0) + 1)

    // 长度满足
    if (i - slow + 1 === p.length) {
      // 全匹配
      let count = 0
      // 遍历当前收集到的 map，一一与windowMap对比，看多少项数相等（这里需要多一层循环）
      for (const [k, v] of windowMap) {
        if (v === pMap.get(k)) {
          count++
        }
      }

      // 如果项全部相等，则直接推入
      if (count === pMap.size) {
        res.push(slow)
      }

      // 次数减少
      windowMap.set(s[slow], windowMap.get(s[slow]) - 1)
      slow++
    }
  }

  return res
}
