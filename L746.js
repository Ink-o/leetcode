/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // 初始化dp，默认第一第二步都需要消费
    let dp = [cost[0], cost[1]];

    // 遍历cost
    for (let i = 2; i < cost.length; i++) {
        // 确认递推公式，前两步的最小值+当前步花费值
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
    }

    // 取得最终结果
    // 由于倒数第二步骤和倒数第一步是可以必达终点且已经把花费计算在内了，所以直接取两者的最小值即可
    return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};