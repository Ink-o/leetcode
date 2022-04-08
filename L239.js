/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let queue = [];
    let ret = [];
    let curSum = 0;
    let maxNum;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (queue.length !== k) {
            queue.push(element);
            if (queue.length === k) {
                if (typeof maxNum === 'undefined') {
                    maxNum = curSum;
                } else {
                    maxNum = maxNum > curSum ? maxNum : curSum;
                }
                ret.push(maxNum);
            }
        } else {
            const ele = queue.shift()
            curSum -= ele;
            queue.push(element);
            maxNum = maxNum > curSum ? maxNum : curSum;
            ret.push(maxNum);
        }
    }
    return ret;
};
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));