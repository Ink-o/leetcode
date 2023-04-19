/**
 * @param {number} n
 * @return {number}
 */
let total = 0;
var climbStairs = function(n) {
    // 初始化dp，第0层为0，第1层为1，第2层为2
    let dp = [0, 1, 2];
    // dp推导过程
    // dp[i - 1] 是 i - 1个梯子的走法
    // dp[i - 2] 是 i - 2个梯子的走法
    // 所以dp[i]就是等于dp[i - 1] + dp[i - 2]
    // dp[i - 1]可以理解成一次直走一个
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
console.time('t1');
console.log(climbStairs(2));
console.timeEnd('t1');
