/**
 * 机器人走k步路到达目标有多少种走法
 * @param {*} N 全部路的位置，1-N
 * @param {*} M 机器人当前位置
 * @param {*} K 总共走的步数
 * @param {*} P 机器人要去的目标位置
 */
function ways1(N, M, K, P) {
  // 参数无效直接返回0
  if (N < 2 || K < 1 || M > N || P < 1 || P > N) {
    return 0
  }
  // 总共N个位置，从M点出发，还剩K步，返回最终能达到P的方法数
  return walk(N, M, K, P)
}
/**
 *
 * @param {*} N 全部路的位置，1-N
 * @param {*} cur 当前位置
 * @param {*} rest 剩余步数
 * @param {*} P 需要到达的位置
 */
function walk(N, cur, rest, P) {
  if (rest === 0) {
    return cur === P ? 1 : 0
  }
  // 如果当前在1位置，那么只能往右边走
  if (cur === 1) {
    return walk(N, 2, rest - 1, P)
  }
  // 如果当前在N位置，那么只能往左边走
  if (cur === N) {
    return walk(N, N - 1, rest - 1, P)
  }
  // 如果cur不在临界位置，那么左移或者右移都可以
  return walk(N, cur - 1, rest - 1, P) + walk(N, cur + 1, rest - 1, P)
}
console.log(ways1(5, 1, 4, 3))
