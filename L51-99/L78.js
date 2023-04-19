/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let cur = [];
    let res = [];
    let len = nums.length;
    return progress(0);
    function progress(startIndex) {
        res.push(cur.slice())
        for (let i = startIndex; i < len; i++) {
            cur.push(nums[i]);
            progress(i + 1);
            cur.pop();
        }
        return res;
    }   
};
console.log(subsets([1,2,3]));