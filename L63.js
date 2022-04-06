/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// var uniquePathsWithObstacles = function(obstacleGrid) {
//     // 一的作用就是代表这个目的地是到达不了的
//     const xLength = obstacleGrid[0].length;
//     const yLength = obstacleGrid.length;
//     // 全部初始化为0
//     const dp = new Array(yLength).fill().map(_ => Array(xLength).fill(0));
//     // 初始化第一列数据，遇到一就直接停止初始化
//     for (let i = 0; i < yLength && obstacleGrid[i][0] === 0; ++i) {
//         dp[i][0] = 1;
//     }
//     // 初始化第一行数据，遇到一就直接停止初始化
//     for (let i = 0; i < xLength && obstacleGrid[0][i] === 0; ++i) {
//         dp[0][i] = 1;
//     }

//     for (let i = 1; i < yLength; i++) { // x
//         for (let j = 1; j < xLength; j++) { // y
//             dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i][j - 1] + dp[i - 1][j];
//         }
//     }
//     return dp[yLength - 1][xLength - 1];
// }
var uniquePathsWithObstacles = function(obstacleGrid) {
    const xLength = obstacleGrid[0].length;
    const yLength = obstacleGrid.length;
    let dp = new Array(yLength).fill().map(_ => Array(xLength).fill(0));
    // 第一行数据初始化
    for (let i = 0; i < xLength && obstacleGrid[0][i] === 0; i++) {
        dp[0][i] = 1;
    }
    // 第一列数据初始化
    for (let j = 0; j < yLength && obstacleGrid[j][0] === 0; j++) {
        dp[j][0] = 1;
    }
    for (let i = 1; i < yLength; i++) { // x
        for (let j = 1; j < xLength; j++) { // y
            dp[i][j] = obstacleGrid[i][j] == 1 ? 0 : dp[i][j - 1] + dp[i - 1][j]
        }
    }
    return dp[yLength - 1][xLength - 1]
}
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));
