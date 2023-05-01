/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const arr = s.split('')
  // 每次前进 2k 步
  for (let i = 0; i < arr.length; i += 2 * k) {
    // 当前指针 + k 如果没有越界的话，则直接取 i + k - 1 作为右边界作为替换
    if (i + k <= s.length) {
      reverse(arr, i, i + k - 1)
      continue
    }
    // 越界的情况下，直接去 len - 1 做为右边界值
    reverse(arr, i, arr.length - 1)
  }
  function reverse(arr, left, right) {
    while (left < right) {
      const temp = arr[left]
      arr[left] = arr[right]
      arr[right] = temp

      left++
      right--
    }
  }
  return arr.join('')
};
console.log(reverseStr('abcdefg', 2));