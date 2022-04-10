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
 */
var isBalanced = function(root) {
    // 思路：后序遍历，求每个节点的高度，然后左右节点进行高度差对比
    return getHeight(root) === -1 ? false : true;
    function getHeight(node) {
        if (!node) {
            return 0;
        }
        // 如果左子树不平衡了，就直接返回-1，
        let leftHeight = getHeight(node.left);
        if (leftHeight === -1) return -1;

        // 如果右子树不平衡了，就直接返回-1，
        let rightHeight = getHeight(node.right);
        if (rightHeight === -1) return -1;

        // 判断左右子树绝对高度差，大于1的话返回-1，否则返回真实高度
        return abs(leftHeight - rightHeight) > 1 ? -1 : 1 + Math.max(leftHeight, rightHeight);
    }
};