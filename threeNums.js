// 三数之和
let threeSum = function (nums) {
    const len = nums.length;
    if (len < 3) return [];
    // 排序数组，从小到大排序
    nums.sort((a, b) => a - b);
    const resSet = new Set();
    for (let i = 0; i < len - 2; i++) {
        const element = nums[i];
        if (element > 0) break;
        let l = i + 1;
        let r = len - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum < 0) {
                l++;
                continue;
            }
            if (sum > 0) {
                r--;
                continue;
            }
            resSet.add(`${nums[i]},${nums[l]},${nums[r]}`);
            l++;
            r--; 
        }
    }
    return Array.from(resSet).map(i => {
        return i.split(',');
    })
}

let threeSum2 = function (nums) {
    const len = nums.length;
    if (len < 3) return [];
    nums.sort((a, b) => a - b);
    const res = [];
    for (i = 0; i < len - 2; i++) {
        if (nums[i] > 0) break;
        // a去重，每次保证i都是独一无二的
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let l = i + 1;
        let r = len - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum < 0) {
                l++;
                continue;
            }
            if (sum > 0) {
                r--;
                continue;
            }
            res.push([nums[i], nums[l], nums[r]]);
            // b c去重
            while (l < r && nums[l] === nums[++l]);
            while (l < r && nums[r] === nums[--r]);
        }
    }
    return res;
}

var threeSum3 = function(nums) {
    let len = nums.length;
    if (len < 3) return [];
    let res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len  - 2; i++) {
        let l = i + 1;
        let r = len - 1;
        if (nums[i] > 0) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum < 0) {
                l++;
                continue;
            }
            if (sum > 0) {
                r--;
                continue;
            }
            res.push([nums[i], nums[l], nums[r]]);
            while(l < r && nums[l] == nums[++l]);
            while(l < r && nums[r] == nums[--r]);
        } 
    }
    return res;
};
console.log(threeSum3([-1,0,-1,0,1]));