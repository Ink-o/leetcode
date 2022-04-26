/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 思路：通过两条等式来计算出左右区间
 * left + right = sum
 * left - right = target
 * left = (sum + target) / 2
 */
var findTargetSumWays = function(nums, target) {
    const sum = nums.reduce((a, b) => a + b);
    
    // 如果target无法得到，则直接返回0
    if (Math.abs(sum) < target) {
        return 0;
    }

    // target + sum 不是一个偶数，则直接返回0
    if ((target + sum) % 2 !== 0) {
        return 0;
    }

    // 背包容量
    const halfSum = (target + sum) / 2;

    // 初始化dp，dp[i]的意思是 i 容量的背包只能放最多能有 dp[i] 种方法来组成 i 这个数值
    let dp = new Array(halfSum + 1).fill(0);
    // dp[0]初始化为1，组成0的方法就只有一种，那就是0
    dp[0] = 1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = halfSum; j > nums[i]; j--) {
            dp[j] += dp[j - nums[i]] + nums[i];
        }
    }
    return dp[halfSum];
};