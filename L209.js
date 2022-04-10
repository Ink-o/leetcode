var minSubArrayLen = function(target, nums) {
    // 数值定义为len+1
    let minCount = nums.length + 1;
    let curSum = 0;
    let left = 0;
    // 循环
    for (let i = 0; i < nums.length; i++) {
        // 当前数值++
        curSum += nums[i];
        // 边界值：大于或等于target
        while (curSum >= target) {
            // 最小的更新需要在curSum之前进行
            // 更新最小值
            minCount = Math.min(minCount, i - left + 1);
            // 更新curSum
            curSum -= nums[left++];
        }
    }
    return minCount === nums.length + 1 ? 0 : minCount;
}