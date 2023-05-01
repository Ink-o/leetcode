/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length) return null
  // 找到根节点
  const rootVal = preorder.shift()
  // 找到根节点在中序遍历结果中的下标
  const rootValIndex = inorder.indexOf(rootVal)
  const node = new TreeNode(rootVal)
  // 这里构建左右子树传递先序、中序节点时，它们的长度是要相等的
  // 构建左子树，分别是取 先序遍历的 前 rootValIndex 位 和 中序遍历的 前 rootValIndex 位
  node.left = buildTree(preorder.slice(0, rootValIndex), inorder.slice(0, rootValIndex))
  // 构建右子树，分别是取 先序遍历的 后 len - rootValIndex 位（因为头部已经去掉了，所以和中序遍历的 len - rootValIndex - 1 位的长度是相等的）
  node.right = buildTree(preorder.slice(rootValIndex), inorder.slice(rootValIndex + 1))
  return node
};