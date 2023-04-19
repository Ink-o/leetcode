/**
 * 
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const window = new Map()
  const need = new Map()

  // 记录每次字符出现的次数
  for (let i = 0; i < s1.length; i++) {
    const element = s1[i];
    need.set(element, (need.get(element) || 0) + 1)
  }

  // 记录左右边界节点
  let left = 0
  let right = 0
  let valid = 0

  while (right < s2.length) {
    const cur = s2[right]
    right++
    if (need.has(cur)) {
      window.set(cur, (window.get(cur) || 0) + 1)
      if (window.get(cur) === need.get(cur)) {
        valid++
      }
    }
    // 因为这里的 right 已经加一去到下一个节点了，所以这里就是 right - left 准确区间的节点数
    while ((right - left) > s1.length) {
      const l = s2[left]
      left++
      if (need.has(l)) {
        // 当字符串满足时，需要进行 valid--
        if (window.get(l) === need.get(l)) {
          valid--
        }
        window.set(l, window.get(l) - 1)
      }
    }
    if (valid === need.size) {
      return true
    }
  }
  return false
};
console.log(checkInclusion('ab', 'eidboaoo'));