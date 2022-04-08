/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    // nums数组中的数字一定为正数，全部累加起来就是最大值
    const sum = nums.reduce((a,b) => a + b);
    if (Math.abs(target) > sum) {
        return 0;
    }
    if ((target + sum) % 2) {
        return 0;
    }
    // 求解未知数 x - (sum - x) = target     x = (target + sum) / 2
    const halfSum = (target + sum) / 2;

    let dp = new Array(halfSum + 1).fill(0);
    dp[0] = 1; // 当背包剩余可放重量为0的时候，只有一种方法，就是放入0个


    for (let i = 0; i < nums.length; i++) {
        for (let j = halfSum; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]];
        }
    }
    return dp[halfSum];
};
console.log(findTargetSumWays([1,1,1,1,1], 3));