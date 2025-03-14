/**
 * 思路：n 个不同的按钮里面的元素多次进行组合
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  // 初始化map
  const numMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  const len = digits.length
  const res = []
  const cur = []
  if (!len)
    return res

  // 获取传入进来的数字对应的字母数组
  const strArr = []
  for (let i = 0; i < digits.length; i++) {
    strArr.push(numMap[digits[i]].split(''))
  }

  function process(start) {
    // cur 收集满后放入到res中
    if (cur.length === len) {
      res.push(cur.join(''))
      // 这里直接 return 掉，因为后面再收集的元素都会超出范围
      return
    }
    // 每次遍历取特定的 strArr 下标，代表的是不同按键
    const str = strArr[start]
    // 这里的起始索引都是 0，为了让 2 个按键的元素能一一匹配
    for (let j = 0; j < str.length; j++) {
      // 进出栈处理
      cur.push(str[j])
      process(start + 1)
      cur.pop()
    }
  }
  process(0)
  return res
}
console.log(letterCombinations('23'))
