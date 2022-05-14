/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
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
