/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // dp[i][j] 表示 在s的 [0, i - 1] 和t的 [0, j - 1] 范围内的最长公共子序列长度
    let dp = Array.from(Array(s.length), () => Array(t.length + 1).fill(0));

    // 先遍历目标子串
    for (let i = 1; i < s.length; i++) {
        // 然后再遍历源子串
        for (let j = 1; j < t.length; j++) {
            // 如果子串匹配上，则结果值 +1
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                continue;
            }
            // 如果子串匹配不上，则对这一项进行跳过，复用上一次对比的数据
            dp[i][j] = dp[i][j - 1];
        }
    }
    return dp[s.length][t.length];
}