/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    const len = stones.length;
    const sum = stones.reduce((pre, cur) => {
        return pre + cur;
    }, 0);

    let dp = new Array(Math.floor(sum / 2) + 1).fill(0);
    // Math.floor(sum / 2)一定是小于等于 sum/2的，所以最后结果使用sum - dp[dp.length - 1] - dp[dp.length - 1]即可获得碰撞结果
    for (let i = 0; i < len; i++) {
        for (let j = Math.floor(sum / 2); j >= stones[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
        }
    }
    return sum - dp[dp.length - 1] - dp[dp.length - 1];
};
console.log(lastStoneWeightII([2,7,4,1,8,1]));