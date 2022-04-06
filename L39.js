/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    let result = [];
    let cur = [];
    return progress(candidates, target, result, cur);
};
function progress(candidates, target, result, cur, startIndex = 0, sum = 0) {
    if (sum >= target) {
        if (sum === target) {
            result.push([...cur]);
        }
        return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
        if (sum + candidates[i] > target) {
            continue;
        }
        cur.push(candidates[i]);
        sum += candidates[i];
        progress(candidates, target, result, cur, i, sum);
        cur.pop();
        sum -= candidates[i];
    }
    return result;
}