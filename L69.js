/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function(x) {
//     let left = 0,
//         right = x + 1,
//         result;
//     while (left < right) {
//         let mid = Math.floor((left + ((right - left) / 2) ));
//         if (mid * mid <= x) {
//             result = mid;
//             left = mid + 1;
//         } else {
//             right = mid;
//         }
//     }
//     return result;
// };

var mySqrt = function(x) {
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