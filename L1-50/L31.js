/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    /**
     * 
     * @param {*} row 行数
     * @param {*} col 列数
     * @param {*} val 准备填写的数字
     * @param {*} board 整个数独
     * @returns 
     */
    function isValid(row, col, val, board) {
        let len = board.length;
        // 一行不能拥有重复数字
        for (let i = 0; i < len; i++) {
            if (board[row][i] === val) {
                return false;
            }
        }
        // 一列不能拥有重复数字
        for (let i = 0; i < len; i++) {
            if (board[i][col] === val) {
                return false;
            }
        }
        // 判断九宫格内有无重复数字
        let startRow = Math.floor(row / 3) * 3;
        let startCol = Math.floor(col / 3) * 3;
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === val) {
                    return false;
                }
            }
        }
        return true;
    }
    function backTracking() {
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (board[i][j] !== '.') continue;
                for (let val = 1; val <= 9; val++) {
                    if (isValid(i, j, `${val}`)) {
                        board[i][j] = `${val}`;
                        if (backTracking()) {
                            return true;
                        }
                        board[i][j] = '.';
                    }
                }
                // 这里的return false代表的是之前填写的数据让后续无法满足需求
                return false;
            }
        }
        // base case，当所有的列和行全部遍历完毕后返回true，说明这是一个没问题的结果
        return true;
    }
    backTracking();
    return JSON.stringify(board);
};
console.log(solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]));