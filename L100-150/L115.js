/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    // 以i-1为结尾的s子序列中出现以j-1为结尾的t的个数为dp[i][j]。
    // s是纵坐标，t是横坐标
    // dp[0][i]直接初始化为0，这里表示的是空串中出现 [0, i - 1]范围的t字符串个数，所以是为0的
    let dp = Array.from(Array(s.length + 1), new Array(t.length + 1).fill(0));

    // 第 0 列作为初始化列，第0列表示的是空字符串与t字符串相比，所以初始化值为1
    // dp[i][0]的意思是：在[0, i - 1]范围内的s子串出现空字符串的次数为dp[i][0](s可以把元素全部删除掉出现空字符串，所以，初始化值为1)
    // dp[0][0] 表示的是空字符串中出现空字符串的个数，所以也是需要初始化为1的
    for (let i = 0; i <= s.length; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            // 当值匹配成功后，dp[i][j]来源的方向有两个
            // 1、dp[i - 1][j - 1] （上次循环遍历得出来的结果）
            // 2、dp[i - 1][j]（不使用当前s字符的结果）
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
                continue;
            }
            // 匹配不成功则直接放弃s[i - 1]的值，直接沿用上一层已经计算好的值
            dp[i][j] = dp[i - 1][j];
        }
    }
    return dp[s.length][t.length];
}