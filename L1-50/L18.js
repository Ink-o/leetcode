/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const res = [];
    const len = nums.length;
    nums.sort((a,b)=>a-b);
    for (let i = 0; i < len - 3; i++) {
        if (nums[i] > target) {
            break;     
        }
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        const point1 = i;
        for (let j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            const point2 = j;
            let l = j + 1;
            let r = len - 1;
            while (l < r) {
                const sum = nums[point1] + nums[point2] + nums[l] + nums[r];
                if (sum < target) {
                    l++;
                    continue;
                }
                if (sum > target) {
                    r--;
                    continue;
                }
                res.push([nums[point1], nums[point2], nums[l], nums[r]]);
                while (l < r && nums[l]===nums[++l]);
                while (l < r && nums[r]===nums[--r]);
            }
        }
    }
    console.log(res);
};
fourSum([2,2,2,2,2], 8);