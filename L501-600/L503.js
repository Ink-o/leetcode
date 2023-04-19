/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const stack = [];
    let len = nums.length;
    // 这里全部值都初始化为 -1
    const result = Array(len).fill(-1);

    // 模拟遍历2次
    for (let i = 0; i < len * 2; i++) {
        // 这里当前索引都是当前索引值取余长度 i % len
        // 1 % 10 = 1   11 % 10 = 1 , 这样就能保证正常的值覆盖了，拿到的索引值还是 0 -> len - 1
        while (stack.length && nums[i % len] > nums[stack[stack.length - 1]]) {
            const index = stack.pop();
            result[index] = nums[i % len];
        }
        stack.push(i % len);
    }
    return result;
};
console.log(nextGreaterElements([5,4,3,2,1]));