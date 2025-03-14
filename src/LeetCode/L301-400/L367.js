/**
 * 直接二分法就可以解决了，这里求的是整数
 * @param {number} num
 * @return {boolean}
 */
function isPerfectSquare(num) {
  let left = 0
  let right = num + 1
  while (left < right) {
    const mid = Math.floor(left + ((right - left) / 2))
    if (mid * mid > num) {
      right = mid
    }
    else if (mid * mid < num) {
      left = mid + 1
    }
    if (mid * mid === num) {
      return true
    }
  }
  return false
}
console.log(isPerfectSquare(16))
