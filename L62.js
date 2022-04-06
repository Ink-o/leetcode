/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = new Array(m);
    dp.fill([])
    // 初始化x=1的数据
    for (let i = 0; i < n; i++) {
        dp[0][i] = 1;
    }
    for (let i = 1; i < m; i++) { // x
        for (let j = 0; j < n; j++) { // y
            if (j == 0) {
                dp[i][j] = 1;
                continue;
            }
            dp[i][j] = dp[i][j- 1] + dp[i - 1][j]
        }
    }
    return dp[m - 1][n - 1];
};
console.log(uniquePaths(3,3));