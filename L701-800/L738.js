/**
 * @param {number} n
 * @return {number}
 */
function monotoneIncreasingDigits(n) {
  n = `${n}`
  // 将数字分割
  const numberArr = n.split('').map((item) => {
    return +item
  })
  let flag = Infinity
  // 从尾部开始循环
  for (let i = numberArr.length - 1; i > 0; i--) {
    // 当前的位数如果比前一位小的话，将此位变成9，前一位减一
    if (numberArr[i] < numberArr[i - 1]) {
      flag = i
      numberArr[i] = 9
      numberArr[i - 1] = numberArr[i - 1] - 1
    }
  }

  // 这里是针对 100 这样的情况，所以这里需要将标志位后的数字都改成 9
  for (let i = flag; i < numberArr.length; i++) {
    numberArr[i] = 9
  }

  // 这么处理的话是不对第一位进行处理的，前面如果是0的话，在转换成数字的时候会进行删除
  return +numberArr.join('')
}
console.log('monotoneIncreasingDigits(332);: ', monotoneIncreasingDigits(100))
