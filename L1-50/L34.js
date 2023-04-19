/**
 * 这个方法时间复杂度是On的，不推荐
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function (nums, target) {
//     let result = [-1, -1],
//         left = 0,
//         right = nums.length - 1;
//     while (left <= right) {
//         let mid = Math.floor((left + (right - left) / 2));
//         if (nums[mid] < target) {
//             left = mid + 1;
//         } else if (nums[mid] > target) {
//             right = mid - 1;
//         } else {
//             let leftNow = mid;
//             let rightNow = mid;
//             // 判断左右相邻的是否还有相同的数值
//             while (leftNow >= 0 && nums[leftNow] === target) {
//                 result[0] = leftNow;
//                 leftNow -= 1;
//             }
//             while (rightNow >= 0 && nums[rightNow] === target) {
//                 result[1] = rightNow;
//                 rightNow += 1;
//             }
//             return result;
//         }
//     }
//     return result;
// };
// console.log(searchRange([5, 7, 7, 8, 8, 10], 4));

/**
 * O(logn)复杂度
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    // 找到比目标元素第一个大的元素，也就是元素的右边界
    // 最终的结果索引要 -1
    function getRightBorder(nums, target) {
        let left = 0
        let right = nums.length - 1
        let rightBorder = -2
        while (left <= right) {
            const mid = Math.floor(left + ((right - left) / 2))
            const midVal = nums[mid]
            if (midVal > target) {
                right = mid - 1
            } else {
                left = mid + 1
                rightBorder = left
            }
        }
        return rightBorder
    }
    // 找到第一个比目标元素小的元素，也就是元素的左边界
    // 最终的结果索引要 +1
    function getLeftBorder(nums, target) {
        let left = 0
        let right = nums.length - 1
        let leftBorder = -2
        while (left <= right) {
            const mid = Math.floor(left + ((right - left) / 2))
            const midVal = nums[mid]
            if (midVal < target) {
                left = mid + 1
            } else {
                right = mid - 1
                leftBorder = right
            }
        }
        return leftBorder
    }
    const l = getLeftBorder(nums, target)
    const r = getRightBorder(nums, target)
    console.log(l, r);
    // 这里要以 -2 作为初始值，因为在 left <= right 的情况下，mid 的取值可能会为 - 1的
    // 情况1：寻找的target不在元素区间内
    if (l === -2 || r === -2) return [-1, -1]

    // 如果l、r相差不大于1的话，则代表在区间内没找到
    // 情况2：寻找的target内，并且能找到
    if (r - l > 1) {
        return [l + 1, r - 1]
    }

    // 情况1：寻找的target在元素区间内，但是找不到
    return [-1, -1]
}

console.log(searchRange([1], 1));