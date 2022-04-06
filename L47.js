/**
 * @param {number[]} nums
 * @return {number[][]}
 * 思路，对纵向和横向已经遍历过的数据进行去重，最终得出正确答案
 */
var permuteUnique = function(nums) {
    let result = [];
    let path = [];
    let len = nums.length;
    let columnSet = new Set();
    return progress();
    function progress() {
        if (path.length == len) {
            result.push(path.slice());
            return;
        }
        let rowSet = new Set();
        for (let i = 0; i < len; i++) {
            if (columnSet.has(i) || rowSet.has(nums[i])) {
                continue;
            }
            columnSet.add(i);
            rowSet.add(nums[i]);
            path.push(nums[i]);
            progress();
            path.pop();
            columnSet.delete(i);
        }
        return result;
    }
};
console.log(permuteUnique([1,1,2]));