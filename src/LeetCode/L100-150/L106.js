/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function buildTree(inorder, postorder) {
  if (!postorder.length)
    return null
  const rootVal = postorder.pop() // 获取后序遍历的最后一个节点，即根节点
  const rootIndex = inorder.indexOf(rootVal) // 获取中间节点在中序遍历中的下标
  const root = new TreeNode(rootVal) // 创建节点
  // 这里构建左右子树传递中序、后序节点时，它们的长度是要相等的
  // 这里需要保持中序遍历和后序遍历的数组长度一致（中序获取根节点前的数组，不包括根节点。后序遍历取）
  root.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex))
  // 这里需要保持中序遍历和后序遍历的数组长度一致（中序获取根节点后的数组，不包括根节点。因为后序遍历已经把根节点弹出来了，所以直接取rootIndex后的就可以了，长度依然是和中序遍历取rootIndex + 1的长度是一样的）
  root.right = buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex))
  return root
}
