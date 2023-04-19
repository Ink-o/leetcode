/**
 * 使用滑动窗口进行解决
 * @param {*} target 
 * @param {*} nums 
 * @returns 
 */
var minSubArrayLen = function (target, nums) {
    // 数值定义为len+1
    let minCount = nums.length + 1;
    let curSum = 0;
    let slow = 0;
    // 循环
    for (let fast = 0; fast < nums.length; fast++) {
        // 当前数值++
        curSum += nums[fast];
        // 边界值：大于或等于target
        while (curSum >= target) {
            // 最小的更新需要在curSum之前进行
            // 更新最小值(距离长度为 fast - slow + 1)
            minCount = Math.min(minCount, fast - slow + 1);
            // 更新curSum
            // slow 指针更新
            curSum -= nums[slow++];
        }
    }
    return minCount === nums.length + 1 ? 0 : minCount;
}