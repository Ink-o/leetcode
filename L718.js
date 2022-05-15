/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 二维数组dp
 */
var findLength = function(nums1, nums2) {
    
    // 初始dp数组，dp[i][j] 表示 nums1 的 截止 i - 1 下标 与 nums2 的截止 j - 1 下标 最长重复子数组长度
    // 首先全部初始化为0
    let dp = Array.from(new Array(nums1.length + 1), new Array(nums2.length + 1).fill(0));

    // 遍历哪个数组先都没有关系，注意这里的下标是以 1 开始的
    for (let i = 1; i <= nums1.length; i++) {
        for (let j = 1; j <= nums2.length; j++) {
            // 当遇到相同的值时，使用之前已经计算好的值对值进行更新
            if (nums1[i - 1] === nums2[j - 1]) {
                // 这里的值为前一行，前一列的值 + 1
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
        }
    }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 一维数组dp
 */
 var findLength = function(nums1, nums2) {

    // 首先全部初始化为0(在第 i 索引的时候，所重复的子数组长度最长为 dp[i])
    let dp = Array.from(nums2.length).fill(0);

    // 先遍历nums1（注意边界为 nums1.length）
    for (let i = 1; i <= nums1.length; i++) {
        // 再遍历nums2，注意这里需要进行倒序遍历处理，需要保证用到的 dp[j - 1] 是旧值，不能是已经计算过的值
        for (let j = nums2.length; j > 0; j++) {
            // 当遇到相同的值时，使用之前已经计算好的值对值进行更新
            if (nums1[i - 1] === nums2[j - 1]) {
                // 这里的值为前一行，前一列的值 + 1（滚动数组，对左上角的值进行复用）
                dp[j] = dp[j - 1] + 1;
            } else {
                dp[j] = 0;
            }
        }
    }
}
