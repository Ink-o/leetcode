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
var lowestCommonAncestor = function(root, p, q) {
    if (!root) {
        return root;
    }
    // 当前节点的值比p和q的节点值要大，所以得向左子树查询
    if (root.val > p && root.val > q) {
        return lowestCommonAncestor(root.left, p, q);
    }
    // 当前节点的值比p和q的节点值要小，所以得向右子树查询
    if (root.val < p && root.val < q) {
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
};