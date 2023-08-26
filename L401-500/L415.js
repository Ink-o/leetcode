/**
 * 双指针，剩余的数全部为0
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  // 进位
  let add = 0
  // 字符串结果
  let resStr = ''

  while(i >= 0 || j >= 0 || add !== 0) {
    const x = i >= 0 ? +num1[i] : 0
    const y = j >= 0 ? +num2[j] : 0
    const result = x + y + add
    
    // 取个位数作为结果进行字符串拼接
    resStr = (result % 10) + resStr
    // 取商作为进位
    add = Math.floor(result / 10)
    
    i -= 1
    j -= 1
  }
  return resStr
};

/**
 * 延伸题，字符串相减。核心点，要大数减小数
 */
var subtractStrings = function(num1, num2) {
  let borrow = 0
  let p1 = num1.length - 1
  let p2 = num2.length - 1
  const result = []

  while(p1 >= 0 || p2 >= 0) {
    const x = p1 >= 0 ? +num1[p1] : 0
    const y = p2 >= 0 ? +num2[p2] : 0
    // ⭐️这次的差值，要把上次的借位也一并减掉
    let diff = x - y - borrow
    // 如果小于 0 的情况下，需要进行借位
    if (diff < 0) {
      diff += 10
      // 借位数改成 1
      borrow = 1
    } else {
      // 借位数改成 0
      borrow = 0
    }
    result.push(diff)
    p1--
    p2--
  }

  // 去除无效的 0，具体是 100 - 99 后，res：[1, 0, 0] 后面的 0 是无效的
  while(result.length > 1 && result[result.length - 1] === 0) {
    result.pop()
  }
  return result.reverse().join('')
}
console.log(subtractStrings('111', '11'));

/**
 * 补0操作
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// var addStrings = function(num1, num2) {
//   const firstLen = num1.length
//   const secondLen = num2.length
//   let num = 0
//   let str = ''

//   if (firstLen < secondLen) {
//     num1 = num1.padStart(secondLen, '0')
//   } else {
//     num2 = num2.padStart(firstLen, '0')
//   }

//   let len = num1.length

//   while(len-- > 0) {
//     const curSum = +num1[len] + +num2[len] + num
//     num = curSum >= 10 ? 1 : 0
//     str = (curSum % 10) + str
//   }

//   if (num > 0) {
//     str = '1' + str
//   }
//   return str
// };