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
 * 使用后序遍历来计算树节点
 */
function countNodes(root) {
  if (!root)
    return 0
  const leftNodes = countNodes(root.left) // 左（计算左子树的节点）
  const rightNodes = countNodes(root.right) // 右（计算右子树的节点）
  // 这个 1 是父节点的数量
  return 1 + leftNodes + rightNodes // 中(返回计算好的节点高度)
}
