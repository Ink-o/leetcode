let cur = [];
let result = [];
var combinationSum3 = function(k, n) {
    progress(k, n, 1, 0);
};
function progress(k, n, startIndex, sum) {
    if (cur.length === k) {
        if (sum == n) {
            result.push([...cur]);
        }
        return;
    }
    for (let i = startIndex; i <= 9; i++) {
        cur.push(i);
        sum += i;
        progress(k, n, i + 1, sum);
        cur.pop();
        sum -= i;
    }
}
combinationSum3(3, 9);
console.log(result);