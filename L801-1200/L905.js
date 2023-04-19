/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    if (nums.length <= 1) return nums;
    let l = -1, r = nums.length;
    // l为奇数，r为偶数
    // 先执行l自增 和 r自减（这里做了统一的操作，因为下面的if语句和交换操作后都需要执行这个操作，所以就放到了头部）
    while (++l < --r) {
        // 找到最近未被更换的奇数
        while (nums[l] % 2 === 0 && l < r) {
            l++;
        }
        // 找到最近未被更换的偶数
        while (nums[r] % 2 !== 0 && l < r) {
            r--;
        }
        // 当满足l < r的条件才行交换
        if (l < r) {
            // 数组交换
            let tmp = nums[l];
            nums[l] = nums[r];
            nums[r] = tmp;
        }
    }
    return nums;
};
console.log(sortArrayByParity([0, 1]));