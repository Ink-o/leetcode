/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return intervals;
    let result = [];
    intervals.sort((a,b) => {
        return a[0] - b[0];
    });
    for (let i = 0; i < intervals.length; i++) {
        const cur = intervals[i];
        if (i == 0) {
            result.push(cur);
            continue;
        }
        let lastIndex = result.length - 1;
        const resultLast = result[lastIndex];
        if ((resultLast[1] >= cur[0])) {
            result[lastIndex] = [resultLast[0], Math.max(resultLast[1], cur[1])]
        } else {
            result.push(cur);
        }
    }
    return result;
};
console.log(merge([[1,3]]));