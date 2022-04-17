/**
 * @param {number[]} nums
 * @return {number}
 *  贪心的思路为局部最优：当前“连续和”为负数的时候立刻放弃，从下一个元素重新计算“连续和”，
    因为负数加上下一个元素 “连续和”只会越来越小。从而推出全局最优：选取最大“连续和”
 */
var maxSubArray = function(nums) {
    // 结果初始化为nums[0]
    let maxSum = nums[0];
    // 当前结果集初始化为0
    let curSum = 0;
    for (let i = 0; i < nums.length; i++) {
        // 更新curSum和maxSum
        curSum += nums[i];
        maxSum = Math.max(curSum, maxSum);

        // 当curSum小于0的时候，进行重置数值，继续往后查找和计算数值
        if (curSum < 0) {
            curSum = 0;
        }
    }
    return maxSum;
};
console.log(maxSubArray([-2, -1]));