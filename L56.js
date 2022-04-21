/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let result = [];
    intervals.sort((a,b) => {
        return a[0] - b[0];
    });
    // 需要对比的对象
    let prev = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        const cur = intervals[i];

        // 区间不重叠，直接push进数组中
        if (cur[0] > prev[1]) {
            result.push(prev);
            prev = cur;
        } else {
            // 区间重叠，更新慢指针的最大值即可，因为最小值prev是保证小于等cur的最小值的
            prev[1] = Math.max(prev[1], cur[1]);
        }
    }
    // 最后需要把最后一个prev添加进数组中，因为这个prev是一定没有进队的
    result.push(prev);

    return result;
};
console.log(merge([[1,3]]));