/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
function reverseLeftWords(s, n) {
  const strArr = s.split('')
  // 先反转 0，n - 1 范围的数组
  reverse(strArr, 0, n - 1)
  // 再反转 n，len - 1 范围的数组
  reverse(strArr, n, strArr.length - 1)
  // 最后再统一反转
  reverse(strArr, 0, strArr.length - 1)
  return strArr.join('')
  function reverse(strArr, l, r) {
    while (l < r) {
      const tmp = strArr[l]
      strArr[l] = strArr[r]
      strArr[r] = tmp
      l++
      r--
    }
  }
}
console.log(reverseLeftWords('abcdefg', 2))

// /**
//  * @param {string} s
//  * @param {number} n
//  * @return {string}
//  */
// function reverseLeftWords(s, n) {
//   const strArr = Array.from(s)
//   for (let i = 0; i < strArr.length; i++) {
//     if (i === n) {
//       reverse(strArr, 0, i - 1)
//       reverse(strArr, i, strArr.length - 1)
//       reverse(strArr, 0, strArr.length - 1)
//     }
//   }
//   return strArr.join('')
// }
// function reverse(arr, start, end) {
//   while (start < end) {
//     [arr[start], arr[end]] = [arr[end], arr[start]]
//     start++
//     end--
//   }
// }
// reverseLeftWords('abcdefg', 2)
