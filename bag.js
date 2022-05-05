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
    
    // 初始化第一行能装得下物品的dp数组
    for (let j = weight[0]; j <= weight.length; j++) {
        dp[0][j] = weight[0];
    }

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
    // // dp[j]的含义是重量为j的背包最多可以装下价值为多少的物品
    let dp = new Array(size + 1).fill(0);

    // （先遍历物品后遍历背包，且背包必须得倒序遍历：正确解法）
    // 先遍历物品
    for (let i = 0; i < weight.length; i++) {
        // 后遍历背包（这里倒序遍历主要需要保证物品只被放入了一次，状态转移方程中使用的是上一层的数据）
        for (let j = size; j > 0 && j >= weight[i]; j--) {
            // 滚动数组主要是使用了值复用，当遍历到当层的时候再把旧值给覆盖
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
        }
        console.log(JSON.stringify(dp));
    }
    

    // 先遍历背包后遍历物品（错误解法）
    // 这样做导致的结果就是每个dp[i]中只放入了一个物品
    // for (let i = size; i > 0; i--) {
    //     for (let j = 0; j < weight.length; j++) {
    //         // 当背包容量大于物品重量的时候可以选择放入背包
    //         if (i > weight[j]) {
    //             // 先遍历背包，后遍历物品（由于背包前面的值没有初始化，所以dp[i - weight[j]]的值都是为0的，这样导致的结果就是dp[i - weight[j]] + value[j] 的结果一直都是value[j]，也就是每个容量的背包只放入了一个物品，这种结果是一定错误的）
    //             dp[i] = Math.max(dp[i], dp[i - weight[j]] + value[j]);
    //         }
    //     }
    //     console.log(dp);
    // }

    return dp[size];
}

function test () {
    console.log(testWeightBagProblem2([5, 2, 4, 3], [8, 3, 5, 4], 8));
}
test();