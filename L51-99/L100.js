/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * 使用层序遍历，让两棵树的左右节点分别进行对比
 */
var isSameTree = function (p, q) {
  let queue = [];
  // 两棵树进队
  queue.push(p);
  queue.push(q);
  while (queue.length) {
    // 出队
    let leftTree = queue.shift();
    let rightTree = queue.shift();

    // 左右子树不存在直接进行下一次的对比
    if (!leftTree && !rightTree) continue
    // 左右任一存在任一不存在，或者值不相等，则直接返回false
    if (!leftTree || !rightTree || leftTree.val !== rightTree.val) return false

    // 依次添加需要对比的树
    // 这里直接是 l与l相比，r与r相比
    queue.push(leftTree.left);
    queue.push(rightTree.left);
    queue.push(leftTree.right);
    queue.push(rightTree.right);
  }
  return true;
};

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * 使用层序遍历，让两棵树的左右节点分别进行对比
 */
var isSameTree = function (p, q) {
  return compareNode(p, q);

  function compareNode(left, right) {
    // 当前需要对比的2个节点都不存在，则直接返回true
    if (!left && !right) return true
    // 任意节点不存在，或者值不相等时，直接返回false
    if (!left || !right || left.val !== right.val) return false

    // 继续对比下一层的左右节点是否相等
    // 这里是直接 left 与 left 节点做对比
    let leftSide = compareNode(left.left, right.left);
    let rightSide = compareNode(left.right, right.right);
    return leftSide && rightSide;
  }
};