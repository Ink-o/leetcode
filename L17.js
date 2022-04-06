var combinationSum2 = function(candidates, target) {
    let cur = [];
    let result = [];
    let selectedSet = new Set();
    candidates.sort((a, b) => a - b);
    const len = candidates.length;
    let used = new Array(len).fill(false);
    function progress(target, sum, startIndex) {
        if (sum == target) {
            result.push([...cur]);
            return;
        }
        for (let i = startIndex; i < candidates.length && sum < target; i++) {
            // 判断是否重复操作
            if (candidates[i] > target - sum || (i > 0 && candidates[i] == candidates[i - 1] && !selectedSet.has(i - 1))) {
                continue;
            }
            selectedSet.add(i);
            cur.push(candidates[i]);
            sum += candidates[i];
            used[i] = true;
            progress(target, sum, i + 1);
            sum -= candidates[i];
            cur.pop();
            selectedSet.delete(i);
            used[i] = false;
        }
    }
    progress(target, 0, 0);
    return result;
};

// var combinationSum2 = function(candidates, target) {
//     let res = [];
//     let path = [];
//     let total = 0;
//     const len = candidates.length;
//     candidates.sort((a, b) => a - b);
//     let used = new Array(len).fill(false);
//     const backtracking = (startIndex) => {
//         if (total === target) {
//             res.push([...path]);
//             return;
//         }
//         for(let i = startIndex; i < len && total < target; i++) {
//             const cur = candidates[i];
//             if (cur > target - total || (i > 0 && cur === candidates[i - 1] && !used[i - 1])) continue;
//             path.push(cur);
//             total += cur;
//             used[i] = true;
//             backtracking(i + 1);
//             path.pop();
//             total -= cur;
//             used[i] = false;
//         }
//     }
//     backtracking(0);
//     return res;
// };

console.log(combinationSum2([10,1,2,7,6,1,5], 8));
