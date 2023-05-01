/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 核心点：搜索二叉树的左节点val < 根节点的val < 右节点的val
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) {
    return null;
  }
  // 获取当前节点的值
  let curVal = root.val;
  // 如果当前值大于对比值，则去搜索他的左边界值
  if (curVal > val) {
    return searchBST(root.left, val);
  } else if (curVal < val) {
    // 如果当前值大于对比值，则去搜索他的右边界值
    return searchBST(root.right, val);
  }
  return root;
};