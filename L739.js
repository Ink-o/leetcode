/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // const n = temperatures.length;
    // const res = Array(n).fill(0);
    // const stack = []; // 递增栈：用于存储元素右面第一个比他大的元素下表
    // stack.push(0);

    // for (let i = 1; i < n; i++) {
    //     // 栈顶元素
    //     const top = stack[stack.length - 1];
    //     if (temperatures[i] < temperatures[top]) {
    //         stack.push(i);
    //     } else if (temperatures[i] === temperatures[top]) {
    //         stack.push(i);
    //     } else {
    //         while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
    //             const top = stack.pop();
    //             res[top] = i - top;
    //         }
    //         stack.push(i);
    //     }
    // }
    // return res;

    const n = temperatures.length;
    let stack = [];
    stack.push(0);
    let res = Array(n).fill(0);
    
    for (let i = 1; i < n; i++) {
        if (temperatures[i] <= stack[stack.length - 1]) {
            stack.push(i);
        } else {
            while (stack.length && stack[stack.length - 1] < temperatures[i]) {
                const top = stack.pop();
                res[top] = i - top;
                stack.push(i);
            }
        }
    }
    return res;
};
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));