/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let arr = s.split('');
    let stack = [];
    stack.push(arr[0])
    for (let i = 1; i < arr.length; i++) {
        const cur = arr[i];
        if (stack[stack.length - 1] === cur) {
            stack.pop(); // 出栈
            continue;
        }
        stack.push(cur);
    }
    return stack;
};
removeDuplicates('abbaca');