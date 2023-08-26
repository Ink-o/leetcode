/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let len1 = num1.length - 1
  let len2 = num2.length - 1
  let num = 0
  let str = ''

  while (len1 >= 0 || len2 >= 0 || num !== 0) {
    const x = len1 >= 0 ? +num1[len1] : 0
    const y = len2 >= 0 ? +num2[len2] : 0

    const sum = x + y + num
    str = (sum % 10) + str
    num = Math.floor(sum / 10)

    len1--
    len2--
  }
  return str
}
console.log(addStrings("584", "18"));