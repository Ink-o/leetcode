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
 * @param {number} val
 * @return {TreeNode}
 * 思路：直接往空节点中进行插入即可，满足左节点值<根节点<右节点值即可
 */
var insertIntoBST = function (root, val) {
  // 如果节点为空，则直接返回一个新节点
  if (!root) {
    return new TreeNode(val);
  }
  // 节点值大于val，则向左子树设值（如果子节点不为空的话，则还是会返回传入进去的节点，如果子节点为空的话，会返回一个新节点）
  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  }
  // 节点值小于val，则向右子树设值（如果子节点不为空的话，则还是会返回传入进去的节点，如果子节点为空的话，会返回一个新节点）
  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  }
  // 相同直接返回当前节点
  return root;
};