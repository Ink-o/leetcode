function testMultiPack1() {
    // 版本一：改变物品数量为01背包格式
    let weight = [1, 3, 4];
    let value = [15, 20, 30];
    let nums = [2, 3, 2];
    let bagWeight = 10;

    // 将背包数量给展开放置到一维数组中去
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] > 1) {
            weight.push(weight[i]);
            value.push(value[i]);
            nums[i]--;
        }
    }

    // 初始化dp数组，dp[i]表示的是背包容量为i的时候，可以放置的物品最大价值为dp[i]
    let dp = new Array(bagWeight + 1).fill(0);
    
    // 遍历物品
    for (let i = 0; i < weight.length; i++) {
        // 遍历背包
        for (let j = bagWeight; j >= weight[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
        }
    }
    console.log(dp);
}

// testMultiPack1();

function testMultiPack2() {
    // 版本二：改变遍历个数
    let weight = [1, 3, 4];
    let value = [15, 20, 30];
    let nums = [2, 3, 2];
    let bagWeight = 10;

    let dp = new Array(bagWeight + 1).fill(0);
    
    // 遍历物品
    for (let i = 0; i < weight.length; i++) {
        // 遍历背包
        for (let j = bagWeight; j >= weight[i]; j--) {
            // 遍历个数（这里执行的依然是01背包的主要逻辑，看是一次性取多少个背包）
            for (let k = 1; k <= nums[i] && (j - (k * weight[i]) >= 0); k++) {
                dp[j] = Math.max(dp[j], dp[j - (k * weight[i])] + k * value[i]);
            }
        }
    }
    console.log(dp);
}
testMultiPack2();