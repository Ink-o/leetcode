/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let cur = [];
    let res = [];
    let len = nums.length;
    let selectedSet = new Set();
    nums.sort((a,b) => a - b);
    return progress(0);
    function progress(startIndex) {
        res.push(cur.slice())
        for (let i = startIndex; i < len; i++) {
            if (!selectedSet.has(i - 1) && nums[i] == nums[i - 1]) {
                continue;
            }
            selectedSet.add(i);
            cur.push(nums[i]);
            progress(i + 1);
            cur.pop();
            selectedSet.delete(i);
        }
        return res;
    }
};
console.log(subsetsWithDup([0]));