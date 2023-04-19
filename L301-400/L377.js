/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 排列遵循先遍历背包后遍历物品
 */
 var combinationSum4 = function(nums, target) {
    // 初始化dp数组为amount + 1大小，并且全部初始为0
    // dp[j]表示为当价值为j的时候有dp[j]中拼凑方式
    let dp = new Array(target + 1).fill(0);
    // 初始化dp，当价值为0的时候，总共有1中拼凑方式，那就是0
    dp[0] = 1;

    // 题目要求的是排列数组合
    // 所以这里需要先遍历背包
    for (let j = 1; j <= target; j++) {
        // 遍历物品
        for (let i = 0; i < nums.length; i++) {
            if (j >= nums[i]) {
                // 进行数累加
                dp[j] += dp[j - nums[i]]
            }
        }
    }

    return dp[target];
};