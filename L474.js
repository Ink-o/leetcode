/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    // 初始化m行n列的数组
    const dp = new Array(m+1).fill().map(() => new Array(n + 1).fill(0));
    let numOfZeros, numOfOnes;
    
    // 遍历物品
    for (const str of strs) {
        numOfZeros = 0;
        numOfOnes = 0;

        // 计算字符串中出现的0和1的个数
        for (const c of str) {
            if (c === '0') {
                numOfZeros++;
            } else {
                numOfOnes++;
            }
        }

        // 遍历背包
        for (let i = m; i >= numOfZeros; i--) {
            for (let j = n; j >= numOfOnes; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - numOfZeros][j - numOfOnes] + 1);
            }
        }
    }
    return dp[m][n];
};
findMaxForm( ["10", "0001", "111001", "1", "0"], 5, 3);