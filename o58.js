/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
function reverseLeftWords(s, n) {
  const strArr = Array.from(s)
  for (let i = 0; i < strArr.length; i++) {
    if (i === n) {
      reverse(strArr, 0, i - 1)
      reverse(strArr, i, strArr.length - 1)
      reverse(strArr, 0, strArr.length - 1)
    }
  }
  return strArr.join('')
}
function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]
    start++
    end--
  }
}
reverseLeftWords('abcdefg', 2)
