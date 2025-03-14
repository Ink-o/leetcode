/**
 * 核心点：每次对目标字符串进行 substring(startIndex, i + 1)的切割
 * 这样就能保证在同一树枝上的切割字符串是一样的，在同一树层上的切割不是一样的
 * @param {string} s
 * @return {string[][]}
 */
function partition(s) {
  const res = []
  const path = []
  const len = s.length
  backtracking(0)
  return res
  function backtracking(startIndex) {
    if (startIndex >= len) {
      res.push([...path])
      return
    }
    // startIndex为当前纵向遍历的层级，i为横向遍历的层级，startIndex会一直从0开始，但是i只能有一次为0
    // 规律，第一次循环，i和startIndex相等，第二次循环i和startIndex相差1，第n次循环相差n
    for (let i = startIndex; i < len; i++) {
      // 判断startIndex到达i的位置截取的字符串是否为回文，如果为非回文，则直接跳过
      if (!isPalindrom(s, startIndex, i))
        continue
      // 如果确定为回文的情况下，直接添加进 path
      path.push(s.substring(startIndex, i + 1))
      backtracking(i + 1)
      path.pop()
    }
  }
}
function isPalindrom(s, l, r) {
  for (let i = l, j = r; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return false
    }
  }
  return true
}
console.log(partition('aab'))
