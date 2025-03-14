/**
 * @param {string} s
 * @return {string[]}
 */
function restoreIpAddresses(s) {
  const res = []
  const cur = []
  function progress(startIndex) {
    // 当 cur 收集了 4 个值，并且 startIndex 走到了尾部，这时才可以对 res 进行收集
    // 原因：得使用完整个字符串
    if (cur.length === 4 && startIndex === s.length) {
      res.push(cur.join('.'))
      return
    }
    for (let i = startIndex; i < s.length; i++) {
      // 当数量大于3或者当前区间截取的ip不符合，则结束本次循环
      if (i + 1 - startIndex > 3 || !isIp(s.substring(startIndex, i + 1))) {
        break
      }
      // 新增截取子串
      cur.push(s.substring(startIndex, i + 1))
      progress(i + 1)
      // 回溯
      cur.pop()
    }
  }
  function isIp(s) {
    // 以0开头，并且长度大于1
    if (s[0] === 0 && s.length > 1)
      return false
    // 数值大于255
    if (Number(s) > 255)
      return false
    return true
  }
  progress(0)
  return res
}
console.log(restoreIpAddresses('25525511135'))
