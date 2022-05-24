/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const len = temperatures.length;
    const res = [];
    let stack = []; // 单调栈（存放的是索引值），保存还未找到比里面值大的索引
    stack.push(0);

    for (let i = 1; i < len; i++) {
        // 当栈中还存在值 和 当前值比栈顶中的值要大的话，则进入循环
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            // 获取栈顶
            const top = stack.pop();
            // 赋值为当前索引与栈顶的差值
            res[top] = i - top;
        }
        // 栈中继续放入当前索引值
        stack.push(i);
    }
    return res;
};
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));