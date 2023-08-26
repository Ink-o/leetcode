/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路：直接取 nums 的中间值作为根节点的实际值，然后再进行切割。以 nums 做为一个中序遍历顺序来进行构建搜索二叉树
 * 这样进行对半分的数组构建出来的二叉搜索树一定是平衡的
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const buildTree = (Arr, left, right) => {
    // 当左指针大于右指针的时候，返回null
    if (left > right) {
      return null;
    }
    // 每次取中间值构建节点
    let mid = Math.floor((left + right) / 2);

    // 创建新的节点
    let root = new TreeNode(Arr[mid]);

    // 继续递归构建树
    root.left = buildTree(Arr, left, mid - 1);
    root.right = buildTree(Arr, mid + 1, right);
    return root;
  }
  return buildTree(nums, 0, nums.length - 1);
};