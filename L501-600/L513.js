/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 思路，直接层序遍历，每次都获取最左边的节点，等待结束后，返回之前保存的最左边的节点
 */
var findBottomLeftValue = function (root) {
  let queue = [root];
  let firstNodeVal = '';
  let res = [];
  while (queue.length) {
    let curLevel = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      if (i === 0) {
        firstNodeVal = cur.val;
      }
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
    res.push(curLevel);
  }
  return firstNodeVal;
};

/**
 * @param {TreeNode} root
 * @return {number}
 * 思路，先序遍历
 */
var findBottomLeftValue = function (root) {
  // 首先考虑递归遍历 前序遍历 找到最大深度的叶子节点即可
  let maxPath = 0, resNode = null;
  // 1、确定递归函数的函数参数
  const dfsTree = function (node, curPath) {
    // 确定递归函数终止条件
    // 中
    // 这里一定是左节点优先更新最大层数，当左节点更新后，就不会再进行最左边的节点更新
    if (!node.left && !node.right) {
      if (curPath > maxPath) {
        maxPath = curPath;
        resNode = node.val;
      }
    }
    // 左（这里隐藏着回溯，进去的时候传递了 curPath + 1，但实际上执行完之后 curPath 还是原本的样子）
    // 原本的回溯
    // if (node.left) {
    //   curPath++
    //   dfsTree(node.left, curPath);
    //   curPath--
    // }
    node.left && dfsTree(node.left, curPath + 1);
    // 右
    node.right && dfsTree(node.right, curPath + 1);
  }
  dfsTree(root, 1);
  return resNode;
}