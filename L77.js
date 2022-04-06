// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。你可以按 任何顺序 返回答案。
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let cur = [];
let result = [];
var combine = function(n, k) {
    if (n === 1) {
        return [[n]];
    }
    return progress(n, k, 1);
};
function progress(n, k, startIndex) {
    if (cur.length == k) {
        result.push([...cur]);
        return;
    }
    for (let i = startIndex; i <= n ; i++) {
        cur.push(i); // 回溯前先将元素进行压栈
        console.log(i);
        progress(n, k, i + 1);
        cur.pop(); // 回溯完毕后将元素进行出栈
    }
    return result;
}
 combine(2, 1, 1);
 console.log(result);