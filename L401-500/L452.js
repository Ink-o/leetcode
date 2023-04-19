/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    let count = 1;

    // 贪心策略，将数组中的最右边界从小到大进行排序，然后每次射箭都取最右边界，判断有没有覆盖到下一个数组的范围
    // 没有则需要声明新的箭。有的话则无需声明新的箭

    points.sort((a,b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    
    let curCount = points[0][1];
    for (let i = 1; i < points.length; i++) {
        const cur = points[i]
        if (curCount < cur[0]) {
            count++;
            curCount = cur[1]
        }
    }
    return count;
};


/**
 * @param {number[][]} points
 * @return {number}
 * 
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0] - b[0]);
    let result = 0;
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > points[i - 1][1]) {
            result++;
        } else {
            // 更新当前的右边界
            points[i][1] = Math.min(points[i - 1][1], points[i][1])
        }
    }
    return result;
};
