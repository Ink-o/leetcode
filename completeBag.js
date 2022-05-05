function test_completePack1() {
    let weight = [1, 3, 5];
    let value = [15, 20, 30];
    let bagWeight = 4;

    // dp[i] 表示 i 容量的背包最多可以装价值为dp[i]的物品
    let dp = new Array(bagWeight + 1).fill(0);

    // 先遍历物品
    for (let i = 0; i <= weight.length; i++) {
        // 再遍历背包（由于完全背包物品可以无限次摆放，所以这里需要正序摆放，这样后面使用的数据就是当前层的数据了）
        // 这里的j从weight[i]开始主要是为了排除当前层级
        for (let j = weight[i]; j <= bagWeight; j++) {
            // 完全背包的物品可以无限次摆放，这里的动态转移方程数据主要使用了当前层的数据（代表物品可以重复放入）
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
        }
    }
    console.log(dp[bagWeight]);
}

// 先遍历背包
function test_completePack2() {
    let weight = [1, 3, 5];
    let value = [15, 20, 30];
    let bagWeight = 4;

    // dp[i] 表示 i 容量的背包最多可以装价值为dp[i]的物品
    let dp = new Array(bagWeight + 1).fill(0);

    // 为什么完全背包可以先遍历背包，再遍历物品，因为完全背包依靠的是当前层推导出来的结果，所以先循环背包还是循环物品没有影响
    // 先遍历背包
    for (let i = 0; i <= bagWeight; i++) {
        // 再遍历物品
        for (let j = 0; j < weight.length; j++) {
            if (i >= weight[j]) {
                dp[i] = Math.max(dp[i], dp[i - weight[j]] + value[j]);
            }
        }
    }
    console.log(dp[bagWeight]);
}
test_completePack1();
test_completePack2();