/**
 * 直接二分法就可以解决了，这里求的是整数
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let left = 0,
        right = num + 1;
    while (left < right) {
        let mid = Math.floor(left + ((right - left) / 2));
        if (mid * mid > num) {
            right = mid;
        } else if (mid * mid < num) {
            left = mid + 1;
        }
        if (mid * mid === num) {
            return true;
        }
    }
    return false;
};
console.log(isPerfectSquare(16));