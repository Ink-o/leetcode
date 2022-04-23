/**
 * 二维数组背包问题
 * @param {number[]} weight 物品重量数组
 * @param {number[]} value 物品价值数组
 * @param {number} size 背包容量
 */
function testWeightBagProblem(weight, value, size) {
    let len = weight.length;
    // 定义dp[i][j] i为[0-i]个物品范围内，j为剩余背包容量。
    // y轴代表的是物品编号，x轴代表的是背包剩余容量
    // 表示从下标为[0-i]的物品里任意取，放进容量为j的背包，价值总和最大是多少。
    let dp = new Array(len + 1).fill().map(_ => new Array(size + 1).fill(0));
    
    // 遍历物品，注意，物品编号需要从1开始，默认没有为0的物品编号，初始化值也是给了0
    for (let i = 1; i <= len; i++) {
        // 遍历背包容量
        for (let j = 0; j <= size; j++) {
            // 剩余背包容量不足以放入此物品，则i直接减1（意思是直接去1至i - 1的物品中查找合适的能放入进来的物品）
            if (j < weight[i - 1]) {
                dp[i][j] = dp[i - 1][j];
                continue;
            }
            // 剩余容量可以放下此物品，此时有两个选择，放或者不放，所以需要取其最大值
            // 不放，缩小查找范围至i - 1即可，所剩背包容量也不需要改变。dp[i - 1][j]
            // 放，缩小查找范围至i - 1，所剩背包容量需要减去当前物品的重量（j - weight[i - 1]），并且加上当前物品的价值
            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i - 1]] + value[i - 1]);
        }
    }
    // 最终进行返回
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
    console.log(testWeightBagProblem([2, 3, 4, 5], [3, 4, 5, 8], 8));
}
test();