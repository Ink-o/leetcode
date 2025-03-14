/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  const stack = []
  // 如果第一个字符就是结束字符，则直接 return false
  if (s.length > 0 && !map.hasOwnProperty(s[0]))
    return false
  for (let i = 0; i < s.length; i++) {
    const element = s[i]
    if (map.hasOwnProperty(element)) {
      stack.push(element)
    }
    else if (map[stack.pop()] !== element) { // 出栈元素不等于新入元素，则直接return false
      return false
    }
  }
  return stack.length === 0
}
