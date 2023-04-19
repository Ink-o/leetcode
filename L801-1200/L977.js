/**
 * 头尾双指针对比，新开一个 ret 数组存储结果
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let ret = [];
    let i = 0,
        j = nums.length - 1,
        pos = nums.length - 1; // pos 从尾到头
    while (i <= j) {
        const curJ = nums[j] * nums[j];
        const curI = nums[i] * nums[i];
        if (curI <= curJ) {
            ret[pos] = curJ;
            j--;
        }
        if (curI > curJ) {
            ret[pos] = curI;
            i++
        }
        pos--;
    }
};