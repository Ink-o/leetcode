/**
 * @param {number[]} nums
 * @return {number}
 * 贪心
 */
var wiggleMaxLength = function(nums) {
    if (nums.length <= 1) {
        return nums.length;
    }
    let result = 1; // 默认值为1，当长度大于等于1的时候，最小值至少为1
    let preDiff = 0; // 上个差值
    let curDiff = 0; // 现在的差值

    for (let i = 0; i < nums.length; i++) {
        // 计算实时的diff
        curDiff = nums[i + 1] - nums[i];
        // 当满足curDiff和preDiff任一个大于0和小于0的时候，结果值+1
        if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
            result++;
            // 更新preDiff
            preDiff = curDiff;
        }
    }
    return result;
};


/**
 * @param {number[]} nums
 * @return {number}
 * dp
 */
var wiggleMaxLength = function(nums) {
    
}