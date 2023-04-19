/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];
        // 判断map中有没有出现差值，有则进行返回
        if (map.has(target - item)) {
            return [map.get(target - item), i];
        }
        // 记录每次出现的数值以及其下标索引
        map.set(item, i);
    }
};