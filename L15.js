/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return [];
    let res = [];
    nums.sort((a,b) => a-b);
    for (let i = 0; i < nums.length - 2; i++) {
        // 剪枝操作，当第一项大于0的时候直接continue
        if (nums[i] > 0) continue;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        const point = nums[i];
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const sum = point + nums[l] + nums[r];
            // 这里没有被结果收录，所以只需要右指针减一即可
            if (sum > 0) {
                r--;
                continue;
            }
            // 这里没有被结果收录，所以只需要左指针减一即可
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