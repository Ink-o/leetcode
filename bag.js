/**
 * 二维数组背包问题
 * @param {number[]} weight 物品重量数组
 * @param {number[]} value 物品价值数组
 * @param {number} size 背包容量
 */
function testWeightBagProblem(weight, value, size) {
    const len = weight.length,
        dp = new Array(len + 1).fill().map(
            () => Array(size + 1).fill(0)
        );
    for (let i = 1; i <= len; i++) { // 物品
        for (let j = 0; j <= size; j++) { // 背包剩余容量
            if (j >= weight[i - 1]) {
                dp[i][j] = Math.max(
                    dp[i - 1][j],
                    dp[i - 1][j - weight[i - 1]] + value[i - 1],
                )
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[len][size];
}

// 一维数组dp
function testWeightBagProblem2(weight, value, size) {
    // dp[j]的含义是重量为j的背包最多可以装下价值为多少的物品
    const len = weight.length,
        dp = new Array(size + 1).fill(0);
    for (let i = 0; i <= len; i++) { // 物品数量
        for (let j = size; j >= weight[i - 1]; j--) { // 物品重量，j >= weight[i - 1]是保证数组索引不小于0越界
            dp[j] = Math.max(dp[j], dp[j - weight[i - 1]] + value[i - 1]);
        }
    }
    return dp[size];
}

function test () {
    console.log(testWeightBagProblem2([1, 3, 4], [15, 20, 30], 4));
}
test();