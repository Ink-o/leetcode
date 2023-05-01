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
 * 迭代法
 */
var maxDepth = function (root) {
  // 使用层次遍历来计算二叉树最大深度
  let queue = [];
  let count = 0;
  if (!root) {
    return count;
  }
  queue.push(root);
  while (queue.length) {
    // 获取当前层级的节点个数
    let len = queue.length;
    // 跑完当前层级
    while (len--) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    // 这里记录层级
    count++;
  }
  return count;
};

/**
 * @param {TreeNode} root
 * @return {number}
 * 递归
 */
var maxDepth = function (root) {
  if (!root) return 0; // 不符合，则直接层数为0
  // 获取左子树的总高度
  let leftDeep = maxDepth(root.left);
  // 获取右子树的总高度
  let rightDeep = maxDepth(root.right);
  // 返回当前层数1 + 左右子树的最高高度。加1是因为算上当前中间节点
  return 1 + Math.max(leftDeep, rightDeep);
};