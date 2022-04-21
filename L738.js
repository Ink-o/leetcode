/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
    n = "" + n;
    // 将数字分割
    let numberArr = n.split('').map(item => {
        return +item;
    });
    // 从尾部开始循环
    for (let i = numberArr.length - 1; i > 0; i--) {
        // 当前的位数如果比前一位小的话，将此位变成9，前一位减一
        if (i > 0 && numberArr[i] < numberArr[i - 1]) {
            numberArr[i] = 9;
            numberArr[i - 1] = numberArr[i - 1] - 1;
        }
    }
    // 这么处理的话是不对第一位进行处理的，前面如果是0的话，在转换成数字的时候会进行删除
    console.log(+numberArr.join(''));
};
monotoneIncreasingDigits(10);