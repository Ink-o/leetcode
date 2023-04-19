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
 var trimBST = function(root, low, high) {
    if (!root) {
        return null;
    }
    // 当节点值小于区间值，那么直接返回 trimBST(右节点值)
    if (root.val < low) {
        let right = trimBST(root.right, low, high);
        return right;
    }
    // 当节点值大于区间值，那么直接返回 trimBST(左节点值)
    if (root.val > high) {
        let left = trimBST(root.left, low, high);
        return left;
    }
    // 当节点值在区间值中的时候，则重新设值其 左右节点
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
};