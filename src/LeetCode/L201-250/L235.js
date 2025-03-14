/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  if (!root) {
    return root
  }
  // 当前节点的值比p和q的节点值要大，所以得向左子树查询
  if (root.val > p && root.val > q) {
    return lowestCommonAncestor(root.left, p, q)
  }
  // 当前节点的值比p和q的节点值要小，所以得向右子树查询
  if (root.val < p && root.val < q) {
    return lowestCommonAncestor(root.right, p, q)
  }
  // 这里是从根节点开始向下寻找
  // 当遇到的第一个 root.val 处于 [p, q] 或者 [q, p] 区间内部的，这个就是二叉搜索树的最近公共节点
  return root
}
