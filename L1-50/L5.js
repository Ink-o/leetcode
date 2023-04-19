/**
 * 思路：求出最长回文子串，保存每次的最长长度，每次检测是否需要更新
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // dp[i][j] 表示的是在[i ,j]区间内是否为回文
    let dp = Array.from(Array(s.length), () => new Array(s.length).fill(false));
    
    // 最长长度
    let maxLen = 1;
    let maxStr = s[0];

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {
            if (s[i] === s[j]) {
                if (j - i < 2) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = d[i + 1][j - 1];
                }

                if (dp[i][j] && j - i + 1 > maxLen) {
                    maxLen = j - i + 1;
                    maxStr = s.slice(i, j + 1);
                }
            }
        }
    }
    return maxStr;
}