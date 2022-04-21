/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return [];
    let res = [];
    // 结果从小到大排序
    nums.sort((a,b) => a-b);
    // 这里的i边界为什么是length - 2？因为 l 指针需要 i + 1
    for (let i = 0; i < nums.length - 2; i++) {
        // 剪枝操作，当第一项大于0的时候直接continue（题目要求和为0）
        if (nums[i] > 0) continue;
        // point点去重
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        const point = nums[i];
        let l = i + 1; // 左指针
        let r = nums.length - 1; // 右指针
        while (l < r) {
            const sum = point + nums[l] + nums[r];
            // 这里没有被结果收录，所以只需要右指针减一即可（sum 大于 0，需要右指针的值减少）
            if (sum > 0) {
                r--;
                continue;
            }
            // 这里没有被结果收录，所以只需要左指针减一即可（sum 小于 0，需要左指针的值增加）
            if (sum < 0) {
                l++;
                continue;
            }
            res.push([point, nums[l], nums[r]]);
            // 这里被结果收录了，所以需要保证不能重复
            while (l < r && nums[l] === nums[++l]);
            while (l < r && nums[r] === nums[--r]);
        }
    }
    console.log(res);
};
threeSum([-1,0,1,2,-1,-4]);