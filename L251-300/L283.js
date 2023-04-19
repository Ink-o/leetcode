// 自己写的方法
// var moveZeroes = function(nums) {
//     let fast = 1,
//         len = nums.length;
//     for (let i = 0; i < len; i++) {
//         const element = nums[i];
//         // 需要替换
//         if (element === 0) {
//             // 快指针寻找下一个不为0的数据
//             while (nums[fast] === 0 && fast < len) {
//                 fast++;
//             }
//             if (fast === len) {
//                 break;
//             }
//             let tmp = nums[fast];
//             nums[fast] = nums[i];
//             nums[i] = tmp;
//             fast++;
//             continue;
//         }
//         if (++fast === len) {
//             break;
//         }
//     }
// };

// 官解
var moveZeroes = function(nums) {
    let n = nums.length, slow = 0, fast = 0;
    while (fast < n) {
        if (nums[fast] !== 0) {
            let tmp = nums[fast];
            nums[fast] = nums[slow];
            nums[slow] = tmp;
            slow++;
        }
        fast++;
    }
    console.log(nums);
}
moveZeroes([4,2,4,0,0,3,0,5,1,0]);