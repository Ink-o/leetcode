/**
 * 这里只是求最接近 x 平方根的整数，所以只需要在
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let left = 0;
    let right = x + 1;
    let mid;
    let result;
    while (left < right) {
        mid = Math.floor((left + right) / 2);
        const ret = mid * mid;
        if (ret < x) {
            result = x;
            left = mid + 1;
            continue;
        }
        if (ret > x) {
            right = mid;
            continue;
        }
        return mid;
    }
    return result;
};
console.log(mySqrt(8));