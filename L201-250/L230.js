/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉搜索树的中序遍历是从小到大有序的，取第 k 小的元素实际上就是取中序遍历的第 k 的节点
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let res
  function process(root) {
    if (!root || !k) return
    process(root.left)
    // 当 k 消耗完毕后对 root 进行记录
    if (!--k) {
      res = root.val
    }
    process(root.right)
  }
  process(root)
  return res
};