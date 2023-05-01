/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let map = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b | 0 // 异或0，只保留整数。js中进行进制运算时，会忽略小数，所以这里直接异或0，可以实现去除小数的效果
  }
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const element = tokens[i];
    if (map[element]) {
      let b = stack.pop();
      let a = stack.pop();
      let ret = map[element](a, b);
      stack.push(ret);
      continue;
    }
    stack.push(Number(element));
  }
  return stack.pop();
};
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));