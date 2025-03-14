/**
 * @param {string} s
 * @return {boolean}
 */
function repeatedSubstringPattern(s) {
  const arr = s.split('')
  // 获取前缀表
  const next = getNext(arr)
  // 如果前缀表最后为-1则返回false，最后一位为-1则代表无重复子串
  // next[next.length - 1]的值代表整个字符串的最长相同前后缀的长度，由于从 -1，开始，所以这里要额外+1
  if (next[next.length - 1] !== -1 && s.length % (s.length - (next[next.length - 1] + 1)) === 0) {
    return true
  }
  return false
  function getNext(arr) {
    let j = -1
    const next = [j]
    for (let i = 1; i < arr.length; i++) {
      while (j >= 0 && arr[i] !== arr[j + 1]) {
        j = next[j]
      }
      if (arr[i] === arr[j + 1]) {
        j++
      }
      next.push(j)
    }
    return next
  }
}
console.log(repeatedSubstringPattern('abcabcabcabc'))
