/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var largestSumAfterKNegations = function(nums, k) {
    // 第一步：按照绝对值大小从大到小进行排序
    nums.sort((a,b) => {
        return Math.abs(b) - Math.abs(a);
    });
    let result = 0;

    // 第二步：将小于等于k个负数变成正数
    nums.forEach((ele, i) => {
        if (ele < 0 && k > 0) {
            nums[i] *= -1;
            k--;
        }
        // 更新结果值
        result += nums[i];
    });

    // 如果处理完所有的负数后k还有剩余，则判断其是不是奇数，如果是奇数，则需要对结果再进行重新计算
    if (k & 1 == 1) {
        // 最小值取相反值
        nums[nums.length - 1] *= -1;
        result += 2 * nums[nums.length - 1];
    }
    return result;
};