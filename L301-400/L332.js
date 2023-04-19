/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
// var findItinerary = function(tickets) {
//     let result = ['JFK'];
//     let map = {};
//     // 记录起点和终点的值
//     for (const tick of tickets) {
//         const [from, to] = tick;
//         if (!map[from]) {
//             map[from] = [];
//         }
//         map[from].push(to);
//     }
//     for (const city in map) {
//         // 对到达城市列表排序
//         map[city].sort();
//     }
//     function backtracing() {
//         // 收集的个数达到最大，直接结束循环
//         if (result.length === tickets.length + 1) {
//             return true;
//         }
//         // 路径数组为空
//         if (!map[result[result.length - 1]] || !map[result[result.length - 1]].length) {
//             return false;
//         }
//         // 第一次循环先对JFK的终点进行遍历
//         for (let i = 0; i < map[result[result.length - 1]].length; i++) {
//             // 获取最短路径的终点
//             let city = map[result[result.length - 1]][i];
//             // 删除已走过的航线，防止死循环
//             map[result[result.length - 1]].splice(i, 1);
//             result.push(city);
//             // 航线有效，则result不进行弹栈
//             if (backtracing()) {
//                 return true;
//             }
//             result.pop();
//             // 将删除掉的元素插入回去
//             map[result[result.length - 1]].splice(i, 0, city);
//         }
//     }
//     backtracing();
//     return result;
// };
var findItinerary = function(tickets) {
    let result = ['JFK'];
    let map = new Map();
    tickets.forEach(([from, to]) => {
        if (!map.has(from)) {
            map.set(from, []);
        }
        map.get(from).push(to)
    })
    map.forEach(element => {
        element.sort();
    })
    progress();
    return result;
    function progress() {
        if (result.length === tickets.length + 1) {
            return true;
        }
        if (!map.get(result[result.length - 1])) {
            return false;
        }
        for (let i = 0; i < map.get(result[result.length - 1]).length; i++) {
            let cur = map.get(result[result.length - 1])[i];
            map.get(result[result.length - 1]).splice(i, 1);
            result.push(cur);
            if (progress()) {
                console.log('in');
                return true;
            }
            result.pop();
            map.get(result[result.length - 1]).splice(i, 1, cur);
        }
    }
};
console.log(findItinerary([["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]));