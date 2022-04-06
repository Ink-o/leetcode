/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    let total = 0;
    let lastPosition = 0;
    points.sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });
    console.log(JSON.stringify(points));
    for (let i = 0; i < points.length; i++) {
        if (i == 0) {
            total += 1;
            lastPosition = points[i][1];
            continue;
        }
        if (lastPosition >= points[i][0] && lastPosition <= points[i][1]) {
            continue;
        } else {
            total += 1;
            lastPosition = points[i][1];
        }
    }
    return total;
};
console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]]));
