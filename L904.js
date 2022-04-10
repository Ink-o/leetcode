/**
 * @param {number[]} fruits
 * @return {number}
 */
 var totalFruit = function(fruits) {
    let map = new Map();
    let maxNum = 1;
    let left = 0;
    fruits.forEach((item, i) => {
        map.set(item, i);
        // 当map集合的容量大于2时，左指针进行滑动
        if (map.size > 2) {
            let minIndex = fruits.length - 1;
            // 找出当前map集合中最小的索引值
            map.forEach(val => {
                minIndex = Math.min(minIndex, val);
            });
            // 进行删除
            map.delete(fruits[minIndex]);
            // 更新左指针索引位置
            left = minIndex + 1;
        }
        maxNum = Math.max(maxNum, i - left + 1);
    });
    return maxNum;
};