/**
 * @param {number[]} nums
 * @return {number}
 * 思路：分两种情况。
 * 一：不包含头部，但是包含尾部
 * 二：包含头部，但是不包含尾部
 * 结果：取情况一和二的最大值
 */
var rob = function(nums) {
    const len = nums.length;

    if (len === 0) return 0;
    if (len === 1) return nums[0];

    // 情况一
    const result1 = robRange(nums, 0, len - 2);
    // 情况二
    const result2 = robRange(nums, 1, len - 1);

    return Math.max(result1, result2);

    // 这里的end是可以到达的
    function robRange(nums, start, end) {
        if (start === end) return nums[start];
        
        // 初始化dp数组为nums数组大小的数组，并且初始化为0
        let dp = new Array(nums.length).fill(0);
        
        // 初始化start开头的数组数据，与打家劫舍 I 的处理逻辑一样
        dp[start] = nums[start];
        dp[start + 1] = Math.max(nums[start], nums[start + 1]);

        for (let i = start + 2; i <= end; i++) {
            // 处理结果：偷或不偷
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        }

        return dp[end];
    }
}