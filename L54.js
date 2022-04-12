/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let list = [];
    if (!matrix || matrix.length === 0) {
        return list;
    }
    let xLength = matrix[0].length;
    let yLength = matrix.length;
    let i = 0;
    // 统计矩阵从外向内的层数，如果矩阵非空，那么它的层数至少为一层
    let count = Math.floor((Math.min(xLength, yLength) + 1) / 2);
    while(i < count) {
        // yLength - 1 - i 是指随着层数增加时，层数的边界所在行（即最上行和最下行的所处的行数），如果出现最上行和最下行是同一行的情况（比如：3行5列的矩阵中，第二层是1行3列的矩阵），此时按顺序打印完第二层第一行后，第一列为空，不打印，折返后如果没有（m - 1 - i != i）这个限制，会重新打印第二层的第一行，造成结果的值变多。同理可得，n - 1 - i != i。

        // 尾部的行：m - i -1
        // 最右边的列：n - i - 1

        // 准则：左闭右闭，都需要达到所能到达的最大范围
        // 列移动：关联的是xLength
        // 行移动：关联的是yLength

        // 从左往右，j为变化列(左闭右开，没有达到最后一列)
        for (let j = i; j < xLength - i; j++) {
            list.push(matrix[i][j]);
        }

        // 从上往下，j为变化行，(xLength - 1) - i为最后一列
        // 左闭右闭，到达最后一行
        for (let j = i + 1; j < yLength - i; j++) {
            // xLength - 1 - i   最后一列
            list.push(matrix[j][(xLength - 1) - i]);
        }

        // 从右往左，j为变化列
        // (xLength - 1) - (i + 1)，n - 1 - i是最后一列。这里的i + 1是为了去除最右下角的那个数(上层已经走过了)
        // yLength - 1 - i !== i 用来保证遍历的这一行没有重复，因为此时正在遍历的是最后一行
        // 左闭右闭，到达第一列
        for (let j = xLength - 1 - i - 1; j >= i && (yLength - 1 - i !== i); j--) {
            // yLength - 1 - i：最后一行
            list.push(matrix[yLength - 1 - i][j]);
        }

        // 从下往上
        // yLength - 1 - i为最后一行， +1是为了去除左下角的数
        // (xLength - 1 - i !== i)为了保证遍历的这列没有重复
        // i是固定列，j是变化行
        // 左闭右闭，达到边界的第二行
        for (let j = (yLength - 1) - (i + 1); j >= i + 1 && (xLength - 1 - i !== i); j--) {
            list.push(matrix[j][i]);
        }
        i++;
    }
    return list;
};
console.log(spiralOrder([[2,3,4],[5,6,7],[8,9,10],[11,12,13],[14,15,16]]));