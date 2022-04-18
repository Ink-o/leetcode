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
 * @return {TreeNode}
 * 累加树：和累计，从右节点开始累加，然后到中节点，后面到左节点
 */
var convertBST = function(root) {
    let pre = null;
    return inOrderReverse(root);
    function inOrderReverse(root) {
        if (!root) {
            return null;
        }
        // 先遍历右节点
        inOrderReverse(root.right);

        // 对当前的节点值进行累加
        if (pre) {
            root.val = pre.val + root.val;
        }
        // 更新pre指针
        pre = root;

        // 后遍历左节点
        inOrderReverse(root.left);
        
        return root;
    }
};