/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// var uniquePathsWithObstacles = function(obstacleGrid) {
//     // 列长度
//     const xLength = obstacleGrid[0].length;
//     // 行长度
//     const yLength = obstacleGrid.length;
//     // 初始化dp数组，先全部默认初始化为0
//     let dp = new Array(yLength).fill().map(_ => Array(xLength).fill(0));

//     // 第一行数据初始化（遇到障碍就直接不再执行后序的初始化，让后序继续保持为0）
//     for (let i = 0; i < xLength && obstacleGrid[0][i] === 0; i++) {
//         dp[0][i] = 1;
//     }

//     // 第一列数据初始化（遇到障碍就直接不再执行后序的初始化，让后序继续保持为0）
//     for (let j = 0; j < yLength && obstacleGrid[j][0] === 0; j++) {
//         dp[j][0] = 1;
//     }

//     for (let i = 1; i < yLength; i++) { // 遍历行
//         for (let j = 1; j < xLength; j++) { // 遍历列
//             // 如果当前点为障碍点，则直接进行跳过，不用进行处理，因为在上面已经初始化为0了
//             if (obstacleGrid[i][j] === 1) {
//                 continue;
//             }
//             // 递推公式
//             // 到达i行，j列的步数 = 到达左边的步数+到达正上方的步数，因为机器人只能向右或者向下走，所以只能有这两种方式
//             dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//         }
//     }
//     // 返回dp数组中的最后一个点
//     return dp[yLength - 1][xLength - 1]
// }
// console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));


/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // 初始化长度为目标数组宽度的数组，并且初始化为-
    // 一般压缩dp成一维数组，都是根据内层循环的长度值来进行初始化的，这里的内层循环长度为n，所以数组长度初始化为n

    // 这里dp的意思是走到第 i 列所有的步数方法
    let dp = new Array(obstacleGrid[0].length).fill(0);

    // 初始化第一行数值，遇到阻碍的后面都初始化为0
    for (let i = 0; i < dp.length && obstacleGrid[0][i] !== 1; i++) {
        dp[i] = 1;
    }

    // 因为上面已经初始化完第一行了，所以这个直接从第二行开始
    for (let i = 1; i < obstacleGrid.length; i++) {
        // 从第0列开始计算，如果有障碍的话，直接跳过
        for (let j = 0; j < dp.length; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[j] = 0;
                continue;
            }
            if (j === 0) continue;
            // 递推公式变成了 dp[j] += dp[j - 1];
            // 原因是dp[j]没变更前就是当前遍历位置的正上方的旧值，然后dp[j - 1]就是其左边的值了
            dp[j] = dp[j] + dp[j - 1];
        }
    }
    return dp[dp.length - 1];
}
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));