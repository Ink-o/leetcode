/**
 * @param {string} s 比对字符
 * @param {string} t 目标字符
 * @return {string}
 */
// function minWindow(s, t) {
//   const need = new Map()
//   const window = new Map()

//   for (let i = 0; i < t.length; i++) {
//     const cur = t[i]
//     need.set(cur, (need.get(cur) || 0) + 1)
//   }

//   // 左右指针
//   let left = 0, right = 0
//   // 目前有效比对数
//   let valid = 0
//   // 记录最小覆盖子串的起始索引及长度
//   let start = 0, len = Infinity

//   while (right < s.length) {
//     // c 是将移入窗口的字符
//     let c = s[right]
//     // 扩大窗口（这里要先扩大窗口，下面比对的上的话，需要用到最新的right）
//     right++
//     // 记录当前目标字符串每个出现的次数
//     if (need.has(c)) {
//       window.set(c, (window.get(c) || 0) + 1)
//       // 判断当前字符串是否匹配完毕，如果匹配完毕，则有效数+1
//       if (window.get(c) === need.get(c)) {
//         valid++
//       }
//     }

//     // 判断左侧窗口是否要收缩
//     while (valid === need.size) {
//       // 在这里更新最小覆盖子串（记录最小子串）
//       // 没到尾部的话，可以执行更新 start
//       if (right - left < len) {
//         start = left
//         len = right - left // 更新当前长度(说明已经匹配成功过了)
//       }
//       // d 是将移出窗口的字符
//       let d = s[left]
//       // 缩小窗口
//       left++
//       // 进行窗口内数据的一系列更新
//       if (need.has(d)) {
//         // 这里要判断数量相等再进行处理
//         if (window.get(d) === need.get(d)) {
//           valid--
//         }
//         window.set(d, window.get(d) - 1)
//       }
//     }
//   }
//   return len === Infinity ? '' : s.substr(start, len)
// }

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  const need = new Map()
  const window = new Map()

  for (let i = 0; i < t.length; i++) {
    const element = t[i]
    need.set(element, (need.get(element) || 0) + 1)
  }

  let left = 0
  let right = 0
  let valid = 0
  let start = 0
  let len = Infinity

  while (right <= s.length) {
    const cur = s[right]
    right++
    if (need.has(cur)) {
      window.set(cur, (window.get(cur) || 0) + 1)
      if (window.get(cur) === need.get(cur)) {
        valid++
      }
    }
    while (valid === need.size) {
      const l = s[left]
      if (need.has(l)) {
        // 找到了更小的子串进行更新
        if (right - left < len) {
          start = left
          len = right - left
        }
        if (window.get(l) === need.get(l)) {
          valid--
        }
        window.set(l, window.get(l) - 1)
      }
      left++
    }
  }
  return len === Infinity ? '' : s.substr(start, len)
}
console.log(minWindow('cabwefgewcwaefgcf', 'cae'))
