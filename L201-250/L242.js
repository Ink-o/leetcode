/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  const map = new Map()

  // 先记录 s 上的各个字符出现的次数
  for (let i = 0; i < s.length; i++) {
    const element = s[i]
    map.set(element, (map.get(element) || 0) + 1)
  }
  // 记录 t 上各个字符串出现的次数
  // 与 s 上的 字符相减
  for (let i = 0; i < t.length; i++) {
    const element = t[i]
    if (!map.get(element)) {
      return false
    }
    map.set(element, map.get(element) - 1)
  }
  // 遍历 map，获取 map 实体，判断 val 值，不为 0 的字符直接返回 false
  for (const [k, v] of map) {
    if (v !== 0) {
      return false
    }
  }
  return true
}
console.log(isAnagram('ab', 'a'))
