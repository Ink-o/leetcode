/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 * 基本思路，以root1为更改节点对象，当其中root1和root2其中一个为空的时候，直接进行返回另外一个不为空的节点
 * 如果两个节点都不为空的情况下，那么对root1的实际值进行更改，并进行左右节点的更改
 */
function mergeTrees(root1, root2) {
  // 如果 root1 为空，则合并后就是 root2
  if (!root1) {
    return root2
  }
  //  如果 root2 为空，则合并后就是 root1
  if (!root2) {
    return root1
  }
  // 更改 root1的值
  root1.val += root2.val
  // 更改 root1 的左右节点
  root1.left = mergeTrees(root1.left, root2.left)
  root1.right = mergeTrees(root1.right, root2.right)
  // 最终将节点进行返回
  return root1
}
