/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let total = 0;
    let preIndex = 0;
    let deleteArr = [];
    intervals.sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });
    console.log(intervals);
    for (let i = 1; i < intervals.length; i++) {
        let cur = intervals[i][0];
        let pre = intervals[preIndex][1];
        if (cur < pre) {
            total += 1;
            // preIndex = i - 1;
            deleteArr.push(intervals[i]);
            continue;
        }
        preIndex = i;
    }
    console.log(deleteArr);
    return total;
};
console.log(eraseOverlapIntervals([ [1,2], [2,3], [3,4], [1,3] ]));


/**
 * @param {number[][]} intervals
 * @return {number}
 * 贪心解法
 */
var eraseOverlapIntervals = function(intervals) {
    // 右边界从小到大排序
    intervals.sort((a, b) => {
        return a[1] - b[1];
    })
    // 这里的count初始化为1，因为一开始就收录了i = 0，并且此时的end还未初始化
    let count = 1;
    // 第一个末尾
    let end = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        let interval = intervals[i];
        // 当前的最小值大于或等于重叠区间的最大值的时候，这时候就不需要删除，这时候继续更新end区间
        if (interval[0] >= end) {
            end = interval[1];
            count += 1;
        }
    }
    // 最后结果就是总长度-无需被删除的长度
    return intervals.length - count;
};
console.log(eraseOverlapIntervals([ [1,2], [2,3], [3,4], [1,3] ]));