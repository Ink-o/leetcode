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