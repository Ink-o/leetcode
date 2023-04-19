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
    let sum = nums.reduce((a,b)=>a+b);

    if (Math.abs(target) > sum) {
        return 0;
    }
    // left值不是个偶数的话，直接返回0
    if ((sum + target) % 2 !== 0) {
        return 0;
    }

    // 获得left值
    let halfNum = (sum + target) / 2;
    
    // 初始化dp数组，dp[i]的意思是背包容量为i时，可以有dp[i]种组合组合成 i 这个值
    let dp = new Array(halfNum + 1).fill(0);
    // dp[0]初始化为1，因为后面的数组都是依靠前面的数值来进行计算
    dp[0] = 1;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = halfNum; j >= nums[i]; j--) {
            // 这里的dp[j - nums[i]] 就是上一层旧的dp值，求总和，直接进行累加即可
            dp[j] += dp[j - nums[i]];
        }
    }

    // 返回最后一个数值
    return dp[halfNum];
};
findTargetSumWays([1,1,1,1,1], 3);