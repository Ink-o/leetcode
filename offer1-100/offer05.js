/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let arr = s.split('')
  let len = s.length
  let count = 0
  // 计算当前字符串的空格数量
  for (let i = 0; i < s.length; i++) {
    s[i] === ' ' && count++
  }
  // 设置 左指针 为原始字符串的长度
  let left = len - 1
  // 数组扩容
  arr.length = len + 2 * count
  // 设置右指针为 arr 数组的尾部
  let right = arr.length - 1

  // 双指针倒序后退修改
  while (right >= 0) {
    // 遇到非空格，则直接左指针的数值赋值给右指针
    if (arr[left] !== ' ') {
      arr[right] = arr[left]
    } else {
      // 遇到空格，右指针的数值设置为 20%
      arr[right] = '0'
      arr[--right] = '2'
      arr[--right] = '%'
    }
    left--
    right--
  }
  return arr.join('')
};
console.log(replaceSpace('We are happy.'));