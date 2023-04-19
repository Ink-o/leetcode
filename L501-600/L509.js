/**
 * @param {number} n
 * @return {number}
 * On^2空间复杂度
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

/**
 * @param {number} n
 * @return {number}
 * On空间复杂度（对dp进行压缩）
 */
// 动态规划解决斐波那契数列
var fib = function(n) {
    let dp = [];
    dp[0] = 0;
    dp[1] = 1;

    // 状态转移方程为dp[i - 1] + dp[i - 2]
    for (let i = 2; i <= n; i++) {
        // 可以发现这个dp的状态转移方程仅需要用到前两个数值，所以仅仅使用两个数值即可，更新dp[1]和dp[0]即可
        // 压缩空间复杂度
        let tmp = dp[1];
        dp[1] = d[1] - dp[0]
        dp[0] = tmp;
    }
    return dp[1];
};

console.log(fib(4));