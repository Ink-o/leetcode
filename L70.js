/**
 * @param {number} n
 * @return {number}
 */
let total = 0;
var climbStairs = function(n) {
    let dp = [1,2];
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n - 1];
};
console.time('t1');
console.log(climbStairs(2));
console.timeEnd('t1');
