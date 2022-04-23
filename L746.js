/**
 * @param {number[]} cost
 * @return {number}
 * 实现思路：要么第一步需要花费，要么第一步不需要花费，以这两个角度来进行dp的初始化
 * 空间复杂度为0(n)
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

/**
 * @param {number[]} cost
 * @return {number}
 * 实现思路：要么第一步需要花费，要么第一步不需要花费，以这两个角度来进行dp的初始化
 * 空间复杂度为O(1)。递推公式的核心其实只需要用到两个变量，每次循环的时候不断变更这两个变量就可以节省空间了
 */
 var minCostClimbingStairs = function(cost) {
    // 初始化dp，默认第一第二步都需要消费
    let dp = [cost[0], cost[1]];

    // 遍历cost
    for (let i = 2; i < cost.length; i++) {
        // 存储更新值
        let tmp = dp[1];
        // 确认递推公式，前两步的最小值+当前步花费值
        dp[1] = Math.min(dp[1], dp[0]) + cost[i];
        // 更新旧值
        dp[0] = tmp;
    }

    // 取得最终结果
    // 由于倒数第二步骤和倒数第一步是可以必达终点且已经把花费计算在内了，所以直接取两者的最小值即可
    return Math.min(dp[0], dp[1]);
};