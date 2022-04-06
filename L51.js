/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let path = [];
    let result = [];
    let rowMap = new Map();
    let columnSet = new Set();
    progress(0);
    return result;
    function progress(level) {
        if (path.length === n) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (
                level !== 0 &&
                (columnSet.has(i) ||
                rowMap.get(level - 1) === i || 
                isDuijiao(level, i))) {
                continue;
            }
            columnSet.add(i);
            rowMap.set(level, i);
            path.push(generatePath(n, i));
            progress(level + 1);
            columnSet.delete(i);
            path.pop();
            rowMap.delete(level);
        }
    }
    function isDuijiao(x, y) {
        let result = false;
        // 是否在同一对角线上，公式|x - x1| == |y - y1|，若相同则相等
        rowMap.forEach((val, key) => {
            let y1 = val; // 列位置
            let x1 = key; // 行位置
            if (Math.abs(x1 - x) == Math.abs(y - y1)) {
                result = true;
            }
        });
        return result;
    }
    function generatePath(len, index) {
        if (index === 0) {
            return 'Q' + '.'.repeat(len - 1);
        }
        if (index === len - 1) {
            return '.'.repeat(len - 1) + 'Q';
        }
        return '.'.repeat(index) + 'Q' + ('.'.repeat(len - index - 1));
    }
};


console.log(solveNQueens(5));