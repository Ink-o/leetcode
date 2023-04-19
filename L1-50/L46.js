/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let path = [];
    let result = [];
    let len = nums.length;
    return progress(0);
    function progress(startIndex) {
        if (path.length === len) {
            result.push(path.slice());
            return;
        }
        for (let i = startIndex; i < len; i++) {
            if (path.indexOf(nums[i]) !== -1) {
                break;
            }
            path.push(nums[i]);
            progress(0);
            path.pop();
        }
        return result;
    }
};
console.log(permute([1, 2, 3]));