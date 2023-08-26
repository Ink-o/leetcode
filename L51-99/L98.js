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
 * @return {boolean}
 * 利用特性，二叉搜索树的中序遍历都是有序的，不满足这个特性就不是二叉搜索树
 */
var isValidBST = function (root) {
  let pre = null;
  const inOrder = (root) => {
    if (!root) {
      return true;
    }
    // 左
    let left = inOrder(root.left);

    // 中
    // pre为null的时候，说明是第一次进入递归，此时不需要进行比较
    // 二叉搜索树满足上个节点小于当前节点实际值，所以当上个节点大于当前节点时，这个就不是二叉搜索树
    if (pre && pre.val >= root.val) {
      return false;
    }
    // 保存上个节点，要在中这里进行保存，不然 right 执行时会出问题
    pre = root;

    // 右
    let right = inOrder(root.right);

    // 判断左右节点是否都为二叉搜索树
    return left && right;
  }
  return inOrder(root);
};