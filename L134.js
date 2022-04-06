/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let all = 0;
    let start = 0
    let cur = 0;
    for (let i = 0; i < gas.length; i++) {
        cur += (gas[i] - cost[i]);
        all += (gas[i] - cost[i]);
        if (cur < 0) {
            cur = 0; 
            start = i + 1
        }
    }
    if (all < 0) return -1;
    return start;
};
console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]));