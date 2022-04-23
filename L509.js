/**
 * @param {number} n
 * @return {number}
 */
// 动态规划解决斐波那契数列
var fib = function(n) {
    let dp = [];
    dp[0] = 0;
    dp[1] = 1;
    // 状态转移方程为dp[i - 1] + dp[i - 2]
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
console.log(fib(4));