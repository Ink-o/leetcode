/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        // 注意这里是以快指针为对象的，快指针需要不与val相等，然后直接替换掉旧元素即可
        // 这里的k就是新数组的长度
        if (nums[i] !== val) {
            nums[k++] = nums[i];
        }
    }
    return k;
};
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));