/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  let result = ['JFK'];
  let map = {};
  // 记录起点和终点的值
  for (const tick of tickets) {
    const [from, to] = tick;
    if (!map[from]) {
      map[from] = [];
    }
    map[from].push(to);
  }
  for (const city in map) {
    // 对到达城市列表排序
    map[city].sort();
  }
  function backtracing() {
    // 收集的个数达到最大，直接结束循环
    if (result.length === tickets.length + 1) {
      return true;
    }
    // 当前result接着的路径数组如果为空，则返回false
    // 代表后面的航班没路线了
    if (!map[res[res.length - 1]]?.length) {
      return false;
    }
    // 第一次循环先对JFK的终点进行遍历
    for (let i = 0; i < map[result[result.length - 1]].length; i++) {
      // 获取最短路径的终点（因为这里是已经从小到大排序过了）
      let city = map[result[result.length - 1]][i];
      // 删除已走过的航线，防止死循环（先删除，然后 res 再进行添加元素）
      map[result[result.length - 1]].splice(i, 1);
      result.push(city);
      // 航线有效，则result不进行弹栈
      if (backtracing()) {
        return true;
      }
      // 这里也是先进行删除，后面插入需要使用到原本正确的索引i
      result.pop();
      // 将删除掉的元素插入回去
      map[result[result.length - 1]].splice(i, 0, city);
    }
  }
  backtracing();
  return result;
};
console.log(findItinerary([["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]]));