/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
    n = "" + n;
    let numberArr = n.split('').map(item => {
        return +item;
    });
    for (let i = numberArr.length - 1; i > 0; i--) {
        if (i > 0 && numberArr[i] < numberArr[i - 1]) {
            numberArr[i] = 9;
            numberArr[i - 1] = numberArr[i - 1] - 1;
        }
    }
    console.log(+numberArr.join(''));
};
monotoneIncreasingDigits(10);