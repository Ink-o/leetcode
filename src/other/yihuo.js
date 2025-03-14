/**
 * 一个数组中，有两个数出现奇数次，其他数出现偶数次，如何得出这个两个出现偶数次的数的值
 * @param {*} arr
 */
// 异或算法，
function getTwice(arr) {
  let eor = 0
  // 异或得出a^b的值
  arr.forEach((element) => {
    eor ^= element
  })
  // 提取出最右边的1，在这个位置上a和b的数值一定不相同
  const rightOne = eor & (~eor + 1)
  let onlyOne = 0
  // 使用a^b异或同一个位置上数字为1的数值，得出a或者b
  arr.forEach((element) => {
    if ((element & rightOne) === 0) {
      onlyOne ^= element
    }
  })
  console.log(`onlyOne：${onlyOne}`, `onlyOne^eor：${onlyOne ^ eor}`)
}
// getTwice([1, 3, 4, 3, 4, 2]);

/**
 * 一个数组中只有一个数出现了奇数次，其他数出现了偶数次，如何得出这个出现奇数次的数
 */
function getOnce(arr) {
  let eor = 0
  arr.forEach((element) => {
    eor ^= element
  })
  console.log('eor', eor)
}
// getOnce([2, 3, 2, 3, 10]);
