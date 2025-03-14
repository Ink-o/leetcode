/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
  // 单调递减栈，里面存放的是数组索引，通过索引可以直接找到对应值
  const stack = []
  // 数组先全部置为0
  const res = Array.from({ length: temperatures.length }).fill(0)
  for (let i = 0; i < temperatures.length; i++) {
    const cur = temperatures[i]
    // 当前元素如果比栈顶元素要大的话，则对里面的元素进行处理
    while (stack.length && temperatures[stack[stack.length - 1]] < cur) {
      // 出栈
      const index = stack.pop()
      // 更新结果值，直接通过下标来进行赋值即可
      res[index] = i - index
    }
    // 当前元素进栈
    stack.push(i)
  }
  return res
}
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
