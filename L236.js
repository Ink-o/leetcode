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
 * 原理：后序遍历，后序遍历符合自底向上搜索。后序遍历就是天然的回溯过程，最先处理的一定是叶子节点。
 */
var lowestCommonAncestor = function(root, p, q) {
    const travelTree = function(root, p, q) {
        // 递归结束条件，root为空或者root与p或q匹配上了，直接返回节点
        if (!root || root === p || root === q) {
            return root;
        }
        // 左子树的匹配点
        let left = travelTree(root.left, p, q);
        // 右子树的匹配点
        let right = travelTree(root.right, p, q);

        // 如果p、q分别在左右子树上，那么直接返回他的父节点
        if (!left && !right) {
            return root;
        }
        // 如果左子树寻找不到p或者q，那么直接返回右子树寻找到的第一个匹配节点，此时p(q)一定是q(p)的最近公共祖先
        if (!left) {
            return right;
        }
        // 如果右子树寻找不到p或者q，那么直接返回左子树
        return left;
    }
    return travelTree(root, p, q);
};