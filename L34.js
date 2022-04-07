/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [-1, -1],
        left = 0,
        right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + (right - left) / 2));
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            let leftNow = mid;
            let rightNow = mid;
            // 判断左右相邻的是否还有相同的数值
            while (leftNow >= 0 && nums[leftNow] === target) {
                result[0] = leftNow;
                leftNow -= 1;
            }
            while (rightNow >= 0 && nums[rightNow] === target) {
                result[1] = rightNow;
                rightNow += 1;
            }
            return result;
        }
    } 
    return result;
};
console.log(searchRange([5,7,7,8,8,10], 4));