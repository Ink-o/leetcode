/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let result1 = 1; // 以正数开头的结果
    let result2 = 1; // 以负数开头的结果
    let i,j;
    let odd1 = true;
    let odd2 = true;
    for (i = 0,j = i + 1; j < nums.length; i++,j++) {
        let start = nums[i];
        let end = nums[j];
        if (
            (odd1 && end - start > 0) ||
            (!odd1 && end - start < 0)
        ) {
            result1++;
            odd1 = !odd1;
        }
        if (
            (odd2 && end - start < 0) ||
            (!odd2 && end - start > 0)
        ) {
            result2++;
            odd2 = !odd2;
            continue;
        }
    }
    console.log(result1);
    console.log(result2);
    return result1 >= result2 ? result1 : result2;
};
// console.log(wiggleMaxLength([0,0]));
console.log(wiggleMaxLength([3,3,3,2,5]));
// console.log(wiggleMaxLength([1,7,4,9,2,5]));
// console.log(wiggleMaxLength([1,17,5,10,13,15,10,5,16,8]));
