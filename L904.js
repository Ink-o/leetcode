var totalFruit = function(fruits) {
    let left = 0;
    let right = 0;
    let len = fruits.length;
    let sum = 0;
    let max = 0;
    let map = new Map();
    let first = -1;
    let second = -1;
    let replaceMark = 0;
    map.set(-1, 0); // -1默认为0
    while (right < len) {
        const cur = fruits[right];
        // 此时篮子没有装满，并且所装的水果不是第一个篮子所装的
        if (first !== cur && (first == -1 || second == -1)) {
            if (first == -1) {
                first = cur;
                replaceMark = first; // 下一个替换
            } else if (second == -1) {
                second = cur;
            }
            map.set(fruits[right++], 1);
            // 更新装的水果数量
            sum = Math.max(sum, map.get(first) + map.get(second));
            continue;
        }
        // 遇到的水果是第一个篮子的
        if (first === cur) {
            map.set(first, map.get(first) + 1);
            right++;
            sum = Math.max(sum, map.get(first) + map.get(second));
            continue;
        }
        // 遇到的水果是第二个篮子的
        if (second === cur) {
            map.set(second, map.get(second) + 1);
            right++;
            sum = Math.max(sum, map.get(first) + map.get(second));
            continue;
        }
        // 遇到的是新水果，左游标滑动
        left = right - 1;
        max = Math.max(max, sum);
        // 数量减少
        sum -= map.get(replaceMark);
        map.delete(replaceMark); // 删除
        if (replaceMark === first) {
            first = cur;
            replaceMark = second;
        } else {
            second = cur;
            replaceMark = first;
        }
        map.set(cur, 1);
        sum = Math.max(sum, map.get(first) + map.get(second));
        right++;
    }
    return sum > max ? sum : max;
};
console.log(totalFruit([1,0,1,4,1,4,1,2,3]));