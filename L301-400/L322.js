/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // 初始化dp，dp[i]表示凑成i价值至少需要dp[i]个硬币
    let dp = new Array(amount + 1).fill(Infinity);
    // dp[0]初始化为0代表的是，凑成0元有0个硬币，实际上就是为了推导后面的价值
    dp[0] = 0;

    // 由于此题的解法与组合或排列无关，所以，物品在循环外或循环内都可以
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j < amount + 1; j++) {
            // 需要用到的 dp[j - coins[i]] 值被初始化了才有意义，否则的话就代表 dp[j - coins[i]] 是无法组合成的
            if (dp[j - coins[i]] !== Infinity) {
                // 由于需要求最小值，所以这边取Math.min，dp[j - coins[i]] + 1 这个意思就是当前物品的价值为1，发放成功了就代表组合数+1
                dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
            }
        }
    }
    // 值没有被更新，则说明没有办法完全组合
    if (dp[amount] === Infinity) return -1;
    return dp[amount];
}