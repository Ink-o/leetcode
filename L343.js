/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    let dp = new Array(n + 1).fill(0);
    dp[2] = 1;
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i; j++) { // 防止越界，界限设定小于i
            dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j)
        }
    }
    return dp[n];
}
console.time('t1');
console.log(integerBreak(10));
console.timeEnd('t1');
