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
 * @param {TreeNode} subRoot
 * @return {boolean}
 * 暴力回溯解决，判断判断每一个节点是否与对比的节点相等
 */
var isSubtree = function (root, subRoot) {
  if (!root) {
    return false;
  }
  // 首先判断根节点是否相同，⭐️后再判断左右孩子及其后辈是否相同（递归）
  return isSame(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};
function isSame(r1, r2) {
  if (!r1 && !r2) return true
  if (!r1 || !r2 || r1.val !== r2.val) return false
  return isSame(r1.left, r2.left) && isSame(r1.right, r2.right);
}