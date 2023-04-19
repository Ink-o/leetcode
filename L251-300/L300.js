/**
 * 思路：两层循环判断是否递增
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // dp[i] 表示 i 之前的最长递增子序列长度，因为最短递增子序列都为1，所以全部初始化为1
    let dp = new Array(nums.length).fill(1);
    let result = 1;
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            // 对比值比当前值大的时候就可以进行值更新了
            if (nums[i] > nums[j]) {
                // 更新 最长递增子序列 长度
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        // 更新最终结果最大长度
        result = Math.max(result, dp[i]);
    }
    return result;
}