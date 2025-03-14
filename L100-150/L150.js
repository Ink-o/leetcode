/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
  const map = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b | 0, // 异或0，只保留整数。js中进行进制运算时，会忽略小数，所以这里直接异或0，可以实现去除小数的效果
  }
  const stack = []
  for (let i = 0; i < tokens.length; i++) {
    const element = tokens[i]
    if (map[element]) {
      const b = stack.pop()
      const a = stack.pop()
      const ret = map[element](a, b)
      stack.push(ret)
      continue
    }
    stack.push(Number(element))
  }
  return stack.pop()
}
console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']))
