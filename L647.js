/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let dp = Array.from(Array(s.length), () => Array(s.length).fill(false));
    let result = 0;

    // 从后往前遍历
    for (let i = s.length - 1; i >= 0; i--) {
        // 以i为当前指针，一直遍历到最后
        for (let j = i; j <= s.length - 1; j++) {
            if (s[i] === s[j]) {
                // 用j减去i，判断两者之间的距离
                if (j - i < 2) {
                    // 如果两者相差的数值不大于2，则这个就是一个回文子串了
                    dp[i][j] = true;
                } else {
                    // 如果两个值相差大于2，则需要将左指针(i)和右指针(j)分别往右和左移动一位
                    // 这里需要用到后面计算好的结果
                    dp[i][j] = dp[i + 1][j - 1]
                }
                // 如果当前结果为true，则在后面加上1
                result += dp[i][j] ? 1 : 0;
            }
        }
    }
    return result;
}