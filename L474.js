/**
 * @param {string[]} strs
 * @param {number} m  m个0
 * @param {number} n  n个1
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    // 初始化m行n列的数组
    // dp[i][j] i个0和j个1最多能装的下dp[i][j]个字符数
    const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));

    let numOfZeros, numOfOnes;
    
    for (const str of strs) {
        numOfZeros = 0;
        numOfOnes = 0;

        // 记录数组中字符串的0和1个数
        for (const c of str) {
            if (c === '0') {
                numOfZeros++;
            } else {
                numOfOnes++;
            }
        }

        // 双重01背包
        
        // 两者的循环循序可以不固定，谁前谁后无所谓
        
        // 先遍历0背包（此时的0物品重量为0出现的次数）
        for(let i = m; i > numOfZeros; i--) {
            // 再遍历1背包（此时的1物品重量为1出现的次数）
            for(let j = n; j > numOfOnes; j--) {
                // 动态转移方程为：Math.max(dp[i][j], dp[i - numOfZeros][j - numOfOnes] + 1)
                // 其中 +1 是 表示满足条件的话次数+1
                dp[i][j] = Math.max(dp[i][j], dp[i - numOfZeros][j - numOfOnes] + 1);
            }
        }
    }
    return dp[i][j];
};
findMaxForm( ["10", "0001", "111001", "1", "0"], 5, 3);