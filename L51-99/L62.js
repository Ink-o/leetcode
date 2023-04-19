/**
 * @param {number} m 行
 * @param {number} n 列
 * @return {number}
 * 空间复杂度O(m x n)
 */
var uniquePaths = function(m, n) {
    // 初始化dp数组，首先全部初始化为1
    // 第一行和第一列都只能有一个方向能到达，所以后序的递推不需要改变dp数组的第0行和第0列
    let dp = new Array(m).fill(1).map(() => new Array(n).fill(1));

    // 遍历行
    for (let i = 1; i < m; i++) {
        // 遍历列
        for (let j = 1; j < n; j++) {
            // 确认递推公式
            // 到达i行，j列的步数 = 到达左边的步数+到达正上方的步数，因为机器人只能向右或者向下走，所以只能有这两种方式
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    // 返回数组的最后一项
    return dp[m - 1][n - 1];
};


/**
 * @param {number} m 行
 * @param {number} n 列
 * @return {number}
 * 空间复杂度On
 */
var uniquePaths = function(m, n) {
    // 只声明列长度的数组，并且初始化值为1（一般压缩dp成一维数组，都是根据内层循环的长度值来进行初始化的，这里的内层循环长度为n，所以数组长度初始化为n，并且初始化值为1）
    let dp = new Array(n).fill(1);
    // 遍历行和列
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // 递推公式变成了 dp[j] += dp[j - 1];
            // 原因是dp[j]没变更前就是当前遍历位置的正上方的旧值，然后dp[j - 1]就是其左边的值了
            // 所以可以用来替代 dp[i][j] = dp[i - 1][j] + dp[i][j - 1]; 递推公式
            dp[j] = dp[j] + dp[j - 1];
        }
    }
    return dp[dp.length - 1]
};
console.log(uniquePaths(3,3));