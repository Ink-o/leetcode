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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
function trimBST(root, low, high) {
  if (!root) {
    return null
  }
  // 二叉搜索树特性，left < root < right
  // 小于 low 的情况直接返回右子树节点即可
  // 当节点值小于区间值，那么直接返回 trimBST(右节点值)
  if (root.val < low) {
    const right = trimBST(root.right, low, high)
    return right
  }
  // 大于 hign 的情况直接返回左子树节点即可
  // 当节点值大于区间值，那么直接返回 trimBST(左节点值)
  if (root.val > high) {
    const left = trimBST(root.left, low, high)
    return left
  }

  // 对当前根节点的左右子节点都进行判断处理
  root.left = trimBST(root.left, low, high)
  root.right = trimBST(root.right, low, high)

  // 最终返回根节点
  return root
}
