/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
//     let mid = nums.length - 1;
//     let left = 0;
//     let right = nums.length - 1;
//     while (left < right) {
//         mid = Math.floor(left + ((right - left) / 2));
//         if (nums[mid] < target) {
//             left = mid + 1;
//         }
//         if (nums[mid] > target) {
//             right = mid - 1;
//         }
//         if (nums[mid] === target) {
//             return mid;
//         }
//     }
//     return nums[left] === target ? left : -1;
// };
var search = function(nums, target) {
    let mid;
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        let val = nums[mid];
        mid = Math.floor((left + right) / 2);
        if (val > target) {
            right = mid - 1;
            continue;
        }
        if (val < target) {
            left = mid + 1;
            continue;
        } 
        return mid;
    }
    return nums[left] === target ? left : -1;
};
console.log(search([-1,0,3,5,9,12], 9));