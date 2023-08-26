/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // 初始化map
  const numMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }
  const len = digits.length
  const res = []
  const cur = []
  if (!len) return res

  // 获取传入进来的数字对应的字母数组
  let strArr = []
  for (let i = 0; i < digits.length; i++) {
    strArr.push(numMap[digits[i]].split(''))
  }

  function process(start) {
    // cur 收集满后放入到res中
    if (cur.length === len) {
      res.push(cur.join(''))
      return
    }
    // 每次遍历取特定的 strArr 的索引
    const str = strArr[start]
    for (let j = 0; j < str.length; j++) {
      // 进出栈处理
      cur.push(str[j])
      process(start + 1)
      cur.pop()
    }
  }
  process(0)
  return res
};
console.log(letterCombinations('23'));